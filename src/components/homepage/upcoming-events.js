import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UpcomingEvent from '../models/upcoming-event';
import styled from '@emotion/styled';
import {fetchDrupalData} from '../../utils/fetch-functions';

const Header = styled('h2')`
  color: #ef3b24;
  text-transform: uppercase;
  font-family: Cabin,sans-serif;`;

export default function UpcomingEvents({ upcomingEventsData }) {
  const [upcomingEvents, setUpcomingEvents] = useState(upcomingEventsData);
  const [upcomingEventsFetched, setUpcomingEventsFetched] = useState(Boolean(upcomingEvents));
  
  useEffect(() => {
    if (upcomingEventsFetched === false) {
        fetchDrupalData('upcomingEvents', {}).then(response => {
            setUpcomingEvents(response);
            setUpcomingEventsFetched(true);
        });
    } else {
        setUpcomingEvents(upcomingEvents);
    }
}, [upcomingEventsFetched, upcomingEvents]);

  return (
    <section>
      <Header>Upcoming Events</Header>
      {upcomingEvents
        ? upcomingEvents.map(event => {
          return (
            <UpcomingEvent
              key={event.title + event.startdate}
              title={event.title}
              startdate={event.startdate}
            />
          );
        })
        : 'Loading, please wait...'}
      <p>
        For a full list of our events,{' '}
        <Link to="/Calendar" title="View full calendar">
          click here
        </Link>
        .
      </p>
    </section>
  );
}

UpcomingEvents.propTypes = {
  upcomingEvents: PropTypes.array.isRequired
};
