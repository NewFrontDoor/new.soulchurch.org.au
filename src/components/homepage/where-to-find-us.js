import React from 'react';
import PropTypes from 'prop-types';
import Map from '../models/google-map';

export default function WhereToFindUs({
  churchDetails: { churchName, streetAddress, city, state }
}) {
  return (
    <section>
      {/*<h2>Where to Find Us</h2>

      <Map
        location={{ lat: -31.9716063, lng: 115.8918229 }}
        height="360px"
        mapWidth="100%"
      />
      <a href="https://goo.gl/maps/yF5VjdUgXPq">{churchName}</a>
      <p>{streetAddress}</p>
      <p>
        {city}, {state}
      </p>*/}
    </section>
  );
}

WhereToFindUs.propTypes = {
  churchDetails: PropTypes.object.isRequired,
  churchName: PropTypes.string.isRequired,
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired
};
