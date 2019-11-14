/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { IoIosPin, IoIosMail, IoLogoFacebook, IoLogoTwitter } from 'react-icons/io';

const Grid = styled('div')`
  display: grid;
  height: 220px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 'footer-left footer-centre footer-right';
  color: #f0f0f0;
  background-color: #2b2b2b;
  padding: 40px 7.5vw 0 7.5vw;
`;

const MetaGrid = styled('div')`
  display: grid;
  height: 65px;
  grid-template-columns: 1fr 1fr;
  background-color: #222222;
  padding: 0 10vw;
  align-items: center;
`;

const centered = css({
  textAlign: 'center'
});

export default function Footer() {
  return (
    <section>
      <Grid>
        <div css={centered}>
          <IoIosPin
            style={{
              stroke: 'white',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <p>
            The Vision 100 Network<br />
            PO Box 5006<br />
            University of Tasmania LPO<br />
            Sandy Bay, TAS, 7005
          </p>
        </div>
        <div css={centered}>
          <IoIosMail
            style={{
              stroke: 'white',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <p>
            <a href="mailto:info@vision100.org">info@vision100.org</a>
            <br />
          </p>
        </div>
        <div css={centered}>
          <IoLogoFacebook
            style={{
              stroke: 'white',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <p>
            <a href="http://facebook.com/Vision100Resources" target="_blank" rel="noopener noreferrer">facebook.com/Vision100Resources</a>
            <br />
          </p>
        </div>
      </Grid>
      <MetaGrid>
        <div>
          <p>
            Website built and maintained by{' '}
            <a href="http://newfrontdoor.org">New Front Door</a>
          </p>
        </div>
        <div css={{ textAlign: 'right' }}>
          <a href="https://www.facebook.com/NewFrontDoorIT/">
            <IoLogoFacebook style={{ fill: '#f0f0f0' }} />
          </a>
          <a href="https://twitter.com/NewFrontDoorIT">
            <IoLogoTwitter style={{ fill: '#f0f0f0' }} />
          </a>
          <a href="mailto:contactus@newfrontdoor.org">
            <IoIosMail style={{ fill: '#f0f0f0' }} />
          </a>
        </div>
      </MetaGrid>
    </section>
  );
}
