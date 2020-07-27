/** @jsx jsx */
import {jsx, Styled} from 'theme-ui';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {StyledPlayer} from '@newfrontdoor/audio-player';
import urlFor from '../utils/sanityImg';
import GoogleMap from './models/google-map';
import UpcomingEvent from './models/upcoming-event';

function Events({upcomingEventsData}) {
  return upcomingEventsData
    ? upcomingEventsData.slice(0, 5).map(event => {
        return (
          <UpcomingEvent
            key={event.name + event.start_date}
            title={event.name}
            startdate={event.start_date}
          />
        );
      })
    : 'Loading, please wait...';
}

function Map() {
  return (
    <GoogleMap
      location={{lat: -31.9716063, lng: 115.8918229}}
      height="360px"
      mapWidth="100%"
    />
  );
}

function Sermon({globalSermons}) {
  const {_id, image, title, passage, url} = globalSermons[0];
  return title ? (
    <div>
      <img
        alt={title}
        sx={{display: 'flex', margin: 'auto', height: '150px'}}
        src={urlFor(image)
          .maxHeight(150)
          .fit('fill')
          .url()}
      />
      <Link sx={{textDecoration: 'none'}} to={`/sermon/${_id}`}>
        <Styled.h4 sx={{marginTop: '8px'}}>{title}</Styled.h4>
      </Link>
      <Styled.h5>{passage}</Styled.h5>
      <StyledPlayer
        hasPlaybackspeed
        audio={url}
        hasBorder={false}
        isInvert={false}
      />
      <Styled.a sx={{color: 'text'}} href={url}>
        download now
      </Styled.a>
      <br />
      <Styled.a sx={{color: 'light'}} href={url}>
        view all sermons
      </Styled.a>
    </div>
  ) : (
    'loading...'
  );
}

function Wrapper({segment: {heading, description}, children}) {
  return (
    <section>
      <Styled.h2 sx={{mb: 10}}>{heading}</Styled.h2>
      <Styled.h4>{description}</Styled.h4>
      {children}
    </section>
  );
}

Sermon.propTypes = {
  globalSermons: PropTypes.array.isRequired
};

Events.propTypes = {
  upcomingEventsData: PropTypes.array.isRequired
};

Wrapper.propTypes = {
  segment: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired
};

const segments = props => ({
  sermons: (
    <Wrapper {...props}>
      <Sermon {...props} />
    </Wrapper>
  ),
  events: (
    <Wrapper {...props}>
      <Events {...props} />
    </Wrapper>
  ),
  map: (
    <Wrapper {...props}>
      <Map {...props} />
    </Wrapper>
  )
});

export default segments;
