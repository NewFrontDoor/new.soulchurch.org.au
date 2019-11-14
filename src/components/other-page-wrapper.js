import React from 'react';
import { Route, Switch } from 'react-router-dom';

import OtherPageContent from './other-page-content';

import AllSermons from './pages/all-sermons';
import Sermons from './pages/sermons';
import SermonPage from './pages/sermon-page';
import SermonSeriesPage from './pages/sermon-series-page';
import OurPeople from './pages/our-people';
import ContactUs from './pages/contact-us';
import Page from './pages/api-page';
import Newsletter from './pages/newsletter-page';
import Calendar from './pages/calendar-page';

export default function OtherPageWrapper({ globalSermons, setGlobalSermons, pagesData, newslettersData }) {
  return pagesData ? (
    <section>
      <Switch>
        <Route
          exact
          path="/AllSermons"
          render={() => (
            <AllSermons
              globalSermons={globalSermons}
              setGlobalSermons={setGlobalSermons}
            />
          )}
        />
        <Route
          exact
          path="/Sermons"
          render={() => (
            <Sermons
              globalSermons={globalSermons}
              setGlobalSermons={setGlobalSermons}
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
        <Route exact path="/OurPeople" component={OurPeople} />
        <Route exact path="/Contact" component={ContactUs} />
        <Route exact path="/Newsletter" render={({ }) => (
          <Newsletter newslettersData={newslettersData} />
        )}
        />
        <Route exact path="/Calendar" render={({ }) => (
          <Calendar />
        )}
        />

        <Route
          path="/:slug"
          render={({ match }) => (
            <Page
              slug={match.params.slug}
              pageData={pagesData ? pagesData[match.params.slug.toLowerCase()] : undefined}
            />
          )}
        />
        <Route path="/*" component={OtherPageContent} />
      </Switch>
    </section>
  ) : ('');
}
