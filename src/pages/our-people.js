import React from 'react';
import styled from '@emotion/styled';
import Person from '../components/models/person';
import Male from '../assets/img/people/Male.png';
import Female from '../assets/img/people/Female.png';
import ContentWrapper from '../components/content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

const people = require('../sample-data/people.json');

const images = {
  Male
};

const Heading = styled.h2`
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 575px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function OurPeople() {
  return (
    <section>
      <TitleBreadcrumb
        title="Our People"
        breadcrumbs={[['Home', '/'], ['Our people', '']]}
      />
      <ContentWrapper width="wide">
        {people.map(group => (
          <React.Fragment key={group.title}>
            <Heading>{group.title}</Heading>
            <Grid>
              {group.people.map(({name, img, title}) => (
                <Person
                  key={name}
                  name={name}
                  image={images[img]}
                  title={title}
                />
              ))}
            </Grid>
          </React.Fragment>
        ))}
      </ContentWrapper>
    </section>
  );
}
