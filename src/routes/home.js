import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import slider from '../assets/img/main-grey-scale.png';
// Import Carousel from '../carousel/carousel';
import segments from '../components/home-segments';

const SliderImg = styled('img')`
  width: 100%;
  height: auto;
`;

const SliderWrapper = styled('div')`
  margin-top: 40px;
  text-align: center;
  height: 550px;
  overflow: hidden;
`;

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

export default function Home({
  mainData,
  globalSermons,
  upcomingEventsData
}) {
  const {content, hero} = mainData;

  return (
    <section>
      <SliderWrapper>
        <SliderImg
          className="img-responsive img-full-width"
          src={slider}
          width="1440"
          height="600"
        />
      </SliderWrapper>
      <Section>
        {content.map(segment => {
          const props = {segment, globalSermons, upcomingEventsData};
          return segments(props)[segment.type];
        })}
      </Section>
    </section>
  );
}

Home.propTypes = {
  globalSermons: PropTypes.array,
  upcomingEventsData: PropTypes.array
};
