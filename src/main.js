import React, {useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './components/navigation';
import Home from './routes/home';
import Page from './routes/page';
import SermonPage from './routes/sermon-page';
import SermonSeriesPage from './routes/sermon-series-page';
import Footer from './components/footer';

const upcomingEventsData = [
  {
    title: 'Sunday Service',
    startdate: 'Sunday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Wednesday Event',
    startdate: 'Wednesday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Thursday Event',
    startdate: 'Friday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Friday Event',
    startdate: 'Saturday, x Month, YYYY 9:30AM'
  },
  {
    title: 'Saturday Event',
    startdate: 'Saturday, x Month, YYYY 9:30PM'
  }
]

export default function Main({
  mainData: {menuData, mainData, sermonData},
  pagesData, events
}) {
  const [globalSermons, setGlobalSermons] = useState(sermonData);

  return (
    <Router>
      <Route path="*" render={() => <Navigation menuData={menuData} />} />
      <Route
        exact
        path="/"
        render={() => (
          <Home
            mainData={mainData}
            globalSermons={globalSermons}
            setGlobalSermons={setGlobalSermons}
            upcomingEventsData={events}
          />
        )}
      />
      <Route
        exact
        path={['/sermon/:nid', '/sermon/:nid/:title']}
        component={SermonPage}
      />
      <Route
        path={['/series/:nid', '/series/:nid/:title}']}
        component={SermonSeriesPage}
      />
      <Route
        path="/:slug"
        render={({match}) => (
          <Page
            slug={match.params.slug}
            pageData={
              pagesData ? pagesData[match.params.slug.toLowerCase()] : undefined
            }
          />
        )}
      />
      <Route path="*" component={Footer} />
    </Router>
  );
}
