/** @jsx jsx */
import styled from '@emotion/styled';
import {css} from '@emotion/core';
import {
  IoIosPin,
  IoIosMail,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram
} from 'react-icons/io';
import {FaRegPlayCircle} from 'react-icons/fa';
import {jsx, Styled, useThemeUI} from 'theme-ui';

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

  const {theme} = useThemeUI()
  return (
    <section>
      <Grid>
        <div css={centered}>
          <IoIosPin
            style={{
              stroke: 'none',
              strokeWidth: '20px',
              fill: theme.colors.accent,
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <Styled.p>
            <Styled.a href="#">Sundays @ 4.30pm</Styled.a> - 5 Lefroy Street, North Hobart
            <br />
            <Styled.a href="#">Office</Styled.a> - 67 Federal Street, North Hobart
          </Styled.p>
        </div>
        <div css={centered}>
          <IoIosMail
            style={{
              stroke: 'none',
              strokeWidth: '20px',
              fill: theme.colors.accent,
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <Styled.p>
            <Styled.a href="mailto:info@soulchurch.org.au">info@soulchurch.org.au</Styled.a>
            <br />
            <Styled.a href="mailto:elders@soulchurch.org.au">
              elders@soulchurch.org.au
            </Styled.a>
          </Styled.p>
        </div>
        <div css={centered}>
          <IoLogoInstagram
            style={{
              stroke: 'none',
              strokeWidth: '20px',
              fill: theme.colors.accent,
              width: '2em',
              height: '2em',
              marginBottom: '20px'
            }}
          />
          <IoLogoFacebook
            style={{
              stroke: 'none',
              strokeWidth: '20px',
              fill: theme.colors.accent,
              width: '2em',
              height: '2em',
              marginBottom: '20px',
              marginLeft: '10px'
            }}
          />
          <FaRegPlayCircle
            style={{
              stroke: 'none',
              strokeWidth: '20px',
              fill: theme.colors.accent,
              width: '2em',
              height: '2em',
              marginBottom: '20px',
              marginLeft: '11px'
            }}
          />
          <Styled.p>
            <Styled.a
              href="https://www.instagram.com/soul_church/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @soul_church
            </Styled.a>
            <br />
            <Styled.a
              href="http://facebook.com/soulchurch"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/SoulChurch
            </Styled.a>
            <br />
            <Styled.a
              href="https://podcasts.apple.com/us/podcast/soul-church/id1389648314"
              target="_blank"
              rel="noopener noreferrer"
            >
              Subscribe to our podcast
            </Styled.a>
            <br />
          </Styled.p>
        </div>
      </Grid>
      <MetaGrid>
        <div>
          <Styled.p>
            Website built and maintained by{' '}
            <Styled.a href="http://newfrontdoor.org">New Front Door</Styled.a>
          </Styled.p>
        </div>
        <div css={{textAlign: 'right'}}>
          <Styled.a href="https://www.facebook.com/NewFrontDoorIT/">
            <IoLogoFacebook style={{fill: theme.colors.accent}} />
          </Styled.a>
          <Styled.a href="https://twitter.com/NewFrontDoorIT">
            <IoLogoTwitter style={{fill: theme.colors.accent}} />
          </Styled.a>
          <Styled.a href="mailto:contactus@newfrontdoor.org">
            <IoIosMail style={{fill: theme.colors.accent}} />
          </Styled.a>
        </div>
      </MetaGrid>
    </section>
  );
}
