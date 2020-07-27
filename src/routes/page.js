/** @jsx jsx */
import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import {Styled, useThemeUI, jsx} from 'theme-ui';
import {Container} from '@theme-ui/components';
import PropTypes from 'prop-types';
import {MdEmail as Email, MdMap as Map} from 'react-icons/md';
import {FaPodcast as Podcast, FaCalendarAlt as Calendar} from 'react-icons/fa';
import CompButton from '../components/comp-button';
import sanity from '../lib/sanity';
import SanityBlock from '../utils/block-text-serializer';
import urlFor from '../utils/sanityImg';

const CoverImage = styled('img')`
  background-image: url(${props =>
    urlFor(props.img)
      .height(250)
      .width(1400)
      .fit('max')
      .url()});
  background-size: cover;
  width: 100%;
  height: 250px;
  margin-top: 40px;
`;

const Flex = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  background-color: ${props => props.background};
    padding: 0 10vw;
`;

const icons = {
  email: <Email />,
  podcast: <Podcast />,
  calendar: <Calendar />,
  map: <Map />
};

export default function Page({pageData, slug}) {
  const {theme} = useThemeUI();
  const [data, setData] = useState(pageData);
  const [dataFetched, setDataFetched] = useState(Boolean(pageData));

  const pageQuery = `
    *[_type == "page" && slug.current match '${slug}'] {
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
    }
  `;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageData]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await sanity.fetch(pageQuery);
      setData(result[0]);
      setDataFetched(true);
    };

    if (dataFetched === false) {
      fetchData();
    } else {
      setData(pageData);
    }
  }, [dataFetched, slug, pageData, pageQuery]);

  return (
    dataFetched && (
      <>
        <CoverImage img={data.mainImage} />
        <Flex background={theme.colors.banner}>
          <Styled.h1 sx={{fontWeight: 'body', margin: '0'}}>
            {data.title}
          </Styled.h1>
          {data.cta && (
            <div>
              <CompButton
                icon={icons[data.cta.icon]}
                text={data.cta.text}
                color="banner"
                size={1.5}
              />
            </div>
          )}
        </Flex>
        <Container>
          <SanityBlock blocks={data.body} />
        </Container>
      </>
    )
  );
}

Page.propTypes = {
  pageData: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
};
