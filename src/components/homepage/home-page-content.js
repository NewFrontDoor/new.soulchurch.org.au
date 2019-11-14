import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { fetchDrupalData } from '../../utils/fetch-functions';
import LatestSermon from './latest-sermon';
import WhereToFindUs from './where-to-find-us';
import UpcomingEvents from './upcoming-events';

const churchDeets = {
  churchName: 'Soul Church',
  streetAddress: '123 Big Walk Way',
  city: 'Small town',
  state: 'WA'
};

const placeholderEvents = [
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
];

const Section = styled('section')`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  max-width: 85vw;
  @media (min-width: 770px) {
    max-width: 1170px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function HomePageContent({ globalSermons, setGlobalSermons }) {
  const [sermons, setSermons] = useState(globalSermons);
  const [churchDetails, setChurchDetails] = useState(churchDeets);
  const [upcomingEvents, setUpcomingEvents] = useState(placeholderEvents);

  useEffect(() => {
    setSermons(globalSermons);
  }, [globalSermons]);

  useEffect(() => {
    if (!sermons) {
      fetchDrupalData('sermons', {}).then(response => {
        setGlobalSermons(response);
      });
    }
  }, [sermons, setGlobalSermons]);

  return (
    <Section>
      <LatestSermon latestSermon={sermons ? sermons[0] : ''} />
      <WhereToFindUs churchDetails={churchDetails} />
      <UpcomingEvents upcomingEvents={upcomingEvents} />
    </Section>
  );
}
