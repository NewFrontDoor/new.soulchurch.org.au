import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import ContentWrapper from '../content-wrapper';

const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 15px 0;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 1.6em;
  margin: 0;
  color: #ef3b24;
  text-transform: uppercase;
  font-family: Cabin,sans-serif;
`;

const Breadcrumbs = styled.div`
  font-size: 0.8em;
  line-height: normal;
  margin: 0;
  padding: 0;
  line-height: 2.1em;
`;

const Delimiter = styled.span`
  padding: 0 5px;
`;

export default function TitleBreadcrumb({ title, breadcrumbs }) {
  return (
    <Wrapper>
      <ContentWrapper width="wide" styles="padding: 15px;">
        <Inner>
          <Title>{title}</Title>
          <Breadcrumbs>
            {breadcrumbs.map(crumb => {
              return (
                <React.Fragment key={crumb[0]}>
                  {!crumb[1] ? (
                    <span>{crumb[0]}</span>
                  ) : (
                      <Link to={crumb[1]}>{crumb[0]}</Link>
                    )}
                  <Delimiter>›</Delimiter>
                </React.Fragment>
              );
            })}
          </Breadcrumbs>
        </Inner>
      </ContentWrapper>
    </Wrapper>
  );
}
