/** @jsx jsx */
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/core';
import { IoIosPin, IoIosMail, IoLogoFacebook, IoLogoTwitter, IoLogoInstagram } from 'react-icons/io';
import { FaRegPlayCircle } from 'react-icons/fa'

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
              stroke: '#cf9901',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <p>
            <a href="#">Sundays @ 4.30pm - </a> 5 Lefroy Street, North Hobart<br/>
            <a href="#">Office - </a> 67 Federal Street, North Hobart
          </p>
        </div>
        <div css={centered}>
          <IoIosMail
            style={{
              stroke: '#cf9901',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <p>
            <a href="mailto:info@soulchurch.org.au">info@soulchurch.org.au</a>
            <br />
            <a href="mailto:elders@soulchurch.org.au">elders@soulchurch.org.au</a>
          </p>
        </div>
        <div css={centered}>
        <IoLogoInstagram
            style={{
              stroke: '#cf9901',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px',
            }}
          />
          <IoLogoFacebook
            style={{
              stroke: '#cf9901',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px',
              marginLeft: '10px'
            }}
          />
          <FaRegPlayCircle
            style={{
              stroke: '#cf9901',
              strokeWidth: '20px',
              fill: 'none',
              width: '2em',
              height: '2em',
              marginBottom: '20px',
              marginLeft: '11px'
            }}
          />
          <p>
            <a href="https://www.instagram.com/soul_church/" target="_blank" rel="noopener noreferrer">@soul_church</a>
            <br />
            <a href="http://facebook.com/soulchurch" target="_blank" rel="noopener noreferrer">facebook.com/SoulChurch</a>
            <br />
            <a href="https://podcasts.apple.com/us/podcast/soul-church/id1389648314" target="_blank" rel="noopener noreferrer">Subscribe to our podcast</a>
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
