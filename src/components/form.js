import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {Styled} from 'theme-ui';
import HomeBlock from '../utils/block-text-serializer';

const Grid = styled('section')`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  input:focus,
  textarea:focus {
    outline: 3px solid gold;
  }

  label {
    display: block;
    grid-column: 1 / 2;
    padding-bottom: 5px;
  }
  input,
  textarea,
  select,
  button {
    width: 100%;
    box-sizing: border-box;
  }
  .fullwidth {
    grid-column: 1 / 3;
  }
  .inline {
    display: inline;
  }
`;

const RadioGroup = styled('fieldset')`
  input {
    width: initial;
  }
  label {
    display: inline;
    margin-left: 10px;
    padding-bottom: 0px;
  }
  legend {
    grid-column: 1 / 3;
  }
`;

function getFormField(field) {
  console.log(field);
  switch (field.input) {
    case 'textarea':
      return (
        <div className="fullwidth">
          <label htmlFor={field.id}>{field.label}</label>
          <textarea id={field.id} name={field.label} rows="8" />
        </div>
      );
    case 'select':
      return (
        <div>
          <label htmlFor={field.id}>{field.label}</label>
          <select id={field.id} name={field.label}>
            {field.values.map(value => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
      );
    case 'radio':
      return (
        <RadioGroup>
          <legend>{field.label}</legend>
          {field.values.map(value => (
            <div key={field.id}>
              <input type="radio" id={value} name={field.id} value={value} />
              <label htmlFor={value}>{value}</label>
            </div>
          ))}
        </RadioGroup>
      );
    case 'checkbox':
      return (
        <div>
          <input type="checkbox" id={field.id} name={field.label} />
          <label className="inline" htmlFor={field.id}>
            {field.label}
          </label>
        </div>
      );
    default:
      return (
        <div>
          <label htmlFor={field.id} required={field.required}>
            {field.label}
            {field.required ? <strong>*</strong> : ''}
          </label>
          <input type={field.input} id={field.id} name={field.label} />
        </div>
      );
  }
}

export default function Form({title, id, description, fields}) {
  return (
    <form id={id}>
      <fieldset>
        <Styled.h2>{title}</Styled.h2>
        <HomeBlock blocks={description} />
        <Grid>
          {fields.map(field => {
            return getFormField(field);
          })}
          <input className="fullwidth" type="submit" value="Submit" />
        </Grid>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fields: PropTypes.array.isRequired
};
