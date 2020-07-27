import React from 'react';
import {Link} from 'react-router-dom';
import AudioPlayer from 'react-responsive-audio-player';
import '../assets/css/audioplayer.css';
import styled from '@emotion/styled';
import {Styled} from 'theme-ui';

const OuterGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 40px;
  grid-template-rows: auto;
  justify-content: space-around;
  align-content: space-around;
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    margin: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props => (props.columns ? props.columns : '')};
`;

export default function SermonBlock({
  sermon: {
    node_title,
    sermon_img,
    datepreached,
    preacher,
    url,
    series_id,
    sermonseries,
    text
  }
}) {
  return (
    <OuterGrid>
      <img src={sermon_img} style={{width: '100%'}} />
      <Grid>
        <div>Date Preached: {datepreached}</div>
        <div>Preacher: {preacher}</div>
        <div>Sermon: </div>
        <AudioPlayer
          playlist={[{url}]}
          controls={['playpause', 'spacer', 'progress']}
        />
        <Styled.a href={url}>Download</Styled.a>
        <div>
          Sermon Series: <Link to={'/series/' + series_id}>{sermonseries}</Link>
        </div>
        {text ? <div>Bible Passage(s): {text}</div> : ''}
      </Grid>
    </OuterGrid>
  );
}
