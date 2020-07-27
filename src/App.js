import React, {useState, useEffect} from 'react';
import {ThemeProvider} from 'theme-ui';
import ky from 'ky-universal';
import Main from './main';
import sanity from './lib/sanity';
import theme from './theme';

const api = ky.create({
  headers: {
    'Content-Type': 'application/json',
    authorization: 'Basic MGFBdnVYUnh6dVE5dTZiQzF0aFo1OU9JZkUxN2JsYlk6'
  },
  mode: 'cors',
  method: 'post',
  prefixUrl: 'https://api.elvanto.com/v1'
});

const mainQuery = `
*[_type == "main"][0] {
  content[]{
    description,
    heading,
    mobile,
    type,
    _key
  },
	hero
}
`;

const menuQuery = `
*[_type == "main"][0] {
  menuitems[]{
    "subtext": description,
    "title": text,
    childpages[]->{
      title,
      slug,
      'pathname': '/' + slug.current
    }
  }
}
`;

const pagesQuery = `
*[_type == "page"] {
  ...,
    body[]{
      ...,
      _type == 'reference' => @-> {
        ...,
        blocks[] {
          ...,
          _type == 'reference' => @ ->,
          "image": image.asset->url,
          "link": link[0].url
        }
      },
      markDefs[] {
        ...,
        _type == 'internalLink' => {
            'slug': @.reference->slug.current
        }
      }
    },
    mainImage,
    'id': _id,
  'pathname': '/' + slug.current
}
`;

const sermonQuery = `
  *[_type == "sermons"] {
    "key": _id,
    title,
    _id,
    preachedDate,
    "preacher": preacher->name,
    "series": series->title,
    passage,
    "image": series->image,
    "url": "https://s3.us-west-2.amazonaws.com/sermons.onewaymargate.org/" + file,
    "slug": slug.current
  } | order(preachedDate desc)
  `;

export default function App() {
  const [mainData, setMainData] = useState();
  const [mainFetch, setMainFetch] = useState();
  const [pagesData, setPagesData] = useState();
  const [events, setEvents] = useState();

  useEffect(() => {
    async function fetchData() {
      const result = await api
        .post('calendar/events/getAll.json', {
          json: {
            page: 1,
            page_size: 10,
            start: new Date().toISOString().split('T')[0],
            end: new Date(new Date().getFullYear() + 1, 11, 1)
              .toISOString()
              .split('T')[0]
          }
        })
        .json();
      console.log(result);
      setEvents(result.events.event);
    }

    fetchData();
  }, []);

  useEffect(() => {
    const allQuery = `
      {
        'menuData': ${menuQuery},
        'mainData': ${mainQuery},
        'sermonData': ${sermonQuery}
      }
    `;

    async function fetchData() {
      const result = await sanity.fetch(allQuery);
      setMainData(result);
      setMainFetch(true);
    }

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const result = await sanity.fetch(pagesQuery);
      const arrayToObject = array =>
        array.reduce((obj, item) => {
          obj[item.slug.current] = item;
          return obj;
        }, {});

      const pagesObject = arrayToObject(result);
      setPagesData(pagesObject);
    }

    fetchData();
  }, [mainFetch]);

  return mainFetch === true ? (
    <ThemeProvider theme={theme}>
      <Main mainData={mainData} pagesData={pagesData} events={events} />
    </ThemeProvider>
  ) : (
    ''
  );
}
