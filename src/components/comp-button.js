import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {useThemeUI} from 'theme-ui';

const IconCircle = styled('button')`
  border: ${({bgcolor, sizes}) => `${sizes[1]}em solid ${bgcolor}`};
  background-color: ${props => props.primary};
  border-radius: 50%;
  height: ${({sizes}) => sizes[7]}em;
  width: ${({sizes}) => sizes[7]}em;
  z-index: 1;
  position: relative;
  vertical-align: middle;
  color: ${props => props.accent};
  svg {
    height: 1em;
    width: 1em;
    vertical-align: middle;
  }
`;

const Label = styled('button')`
  padding: ${({sizes}) => `${sizes[1]}em ${sizes[2]}em`};
  padding-left: ${({sizes}) => sizes[4]}em;
  background-color: ${props => props.primary};
  color: ${props => props.background};
  z-index: 0;
  position: relative;
  vertical-align: middle;
  text-align: right;
  margin-left: ${({sizes}) => sizes[0]}em;
  border-top-right-radius: ${({sizes}) => sizes[5]}em;
  border-bottom-right-radius: ${({sizes}) => sizes[5]}em;
  color: ${props => props.accent};
  font-size: ${({sizes}) => sizes[3]}em;
  white-space: nowrap;
  overflow: hidden;
  border: none;
`;

export default function CompButton({icon, text, color, size = 1}) {
  const {theme} = useThemeUI();
  const vals = [-0.75, 0.3, 0.6, 0.8, 1, 1.25, 2.5, 3, 10];
  const sizes = vals.map(val => val * size);

  return (
    <div tabIndex="0" style={{width: 'fit-content'}}>
      <IconCircle
        tabIndex="-1"
        bgcolor={theme.colors[color]}
        {...theme.colors}
        sizes={sizes}
      >
        {icon}
      </IconCircle>
      <Label tabIndex="-1" sizes={sizes} {...theme.colors}>
        {text}
      </Label>
    </div>
  );
}

CompButton.propTypes = {
  color: PropTypes.string.isRequired,
  icon: PropTypes.any,
  size: PropTypes.number,
  text: PropTypes.string.isRequired
};
