import React, { useReducer } from 'react';
import styled from '@emotion/styled';
import ContactForm from '../models/contact-form';
import ContentWrapper from '../content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

// Import { postToWebform } from '../../utils/postToAPI';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
`;

function reducer(state, action) {
  return { ...state, [action.name]: action.value };
}

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
  formErrorMessage: '',
  formValid: false
};

export default function ContactUs() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit() {
    console.log('Submitting...');
  }

  return (
    <section>
      <TitleBreadcrumb title="Contact Us" breadcrumbs={[['Home', '/']]} />
      <ContentWrapper>
        <p>
          If you have any questions about the Vision 100 Network or would like more information on how to get involved, please contact us - we would love to hear from you.
        </p>

        <Grid>
          <div>
            <h3>Address</h3>
            <p>
              The Vision 100 Network<br />
              PO Box 5006<br />
              University of Tasmania LPO<br />
              Sandy Bay, TAS, 7005
            </p>
          </div>
          <div>
            <h3>Contact Us</h3>
            <p>
              <b>Facebook:</b> &nbsp;<a href="https://www.facebook.com/Vision100Resources/" target="_blank" rel="noreferrer noopener">/Vision100Resources</a>
              <br />
              <b>Email:</b>&nbsp;<a href="mailto:info@vision100.org">info@vision100.org</a>
            </p>
          </div>
        </Grid>
        <ContactForm
          dispatch={dispatch}
          state={state}
          handleSubmit={handleSubmit}
        />
      </ContentWrapper>
    </section>
  );
}
