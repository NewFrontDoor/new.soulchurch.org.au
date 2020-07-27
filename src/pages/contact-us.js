import React, {useReducer} from 'react';
import styled from '@emotion/styled';
import {Styled} from 'theme-ui';
import ContactForm from '../components/models/contact-form';
import ContentWrapper from '../components/content-wrapper';
import TitleBreadcrumb from './title-breadcrumb';

// Import { postToWebform } from '../../utils/postToAPI';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 20px;
`;

function reducer(state, action) {
  return {...state, [action.name]: action.value};
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
        <Styled.p>
          If you have any questions about Soul Church or would like more
          information on how to get involved, please contact us - we would love
          to hear from you.
        </Styled.p>

        <Grid>
          <div>
            <Styled.h3>Address</Styled.h3>
          </div>
          <div>
            <Styled.h3>Contact Us</Styled.h3>
            <Styled.p>
              <b>Facebook:</b> &nbsp;
              <Styled.a
                href="https://www.facebook.com/soulchurch/"
                target="_blank"
                rel="noreferrer noopener"
              >
                /SoulChurch
              </Styled.a>
              <br />
              <b>Email:</b>&nbsp;
              <Styled.a href="mailto:info@soulchurch.org.au">info@soulchurch.org.au</Styled.a>
              <br />
              <b>Instagram:</b>&nbsp;
              <Styled.a
                href="https://www.instagram.com/soul_church/"
                target="_blank"
                rel="noreferrer noopener"
              >
                @soul_church
              </Styled.a>
            </Styled.p>
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
