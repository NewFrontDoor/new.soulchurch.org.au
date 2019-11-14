import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  vertical-align: center;
`;
const Name = styled.p`
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 10px;
  font-weight: 300;
  line-height: 24px;
  text-align: center;
`;

const Title = styled.p`
  font-size: 16px;
  color: #a2a5a4;
  text-transform: uppercase;
  margin-bottom: 50px;
  text-align: center;
`;

export default function Person({image, name, title}) {
  return (
    <div>
      <Img src={image} alt={name} />
      <Name>{name}</Name>
      <Title>{title}</Title>
    </div>
  );
}

Person.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
