// theme.js
export default {
  text: {
    menu: {
      color: 'background',
      fontFamily: 'heading',
      px: 0,
      py: 0,
      textTransform: 'lowercase',
      textDecoration: 'none',
      fontSize: 30
    },
    subtext: {
      color: 'accent',
      fontFamily: 'body',
      px: 0,
      py: 0,
      textTransform: 'lowercase',
      textDecoration: 'none',
      fontSize: 16
    }
  },
  fonts: {
    body: 'Helvetica, system-ui, sans-serif',
    heading: '"Eurostile", serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [
    12,
    14,
    16,
    20,
    24,
    32,
    48,
    64,
    96
  ],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em'
  },
  colors: {
    background: '#FFF',
    text: '#2B2B2B',
    primary: '#3C5A72',
    accent: '#CF9901',
    light: '#707070',
    link: 'accent',
    banner: '#F1F1F1',
    footerBg: 'text',
    none: 'none'
  },
  links: {
    nav: {
      fontFamily: 'heading',
      fontWeight: 400,
      px: 20,
      py: 16,
      color: 'background',
      textTransform: 'lowercase',
      textDecoration: 'none'
    }
  },
  styles: {
    h1: {
      fontSize: 48,
      fontFamily: 'heading',
      fontWeight: 'heading',
      color: 'primary',
      mt: 4,
      mb: 2
    },
    h2: {
      fontSize: 36,
      fontFamily: 'heading',
      color: 'primary',
      fontWeight: 'body'
    },
    h3: {
      color: 'text',
      fontSize: 24,
      fontFamily: 'heading',
      fontWeight: 'heading',
      fontStyle: 'normal',
      mt: 4,
      mb: 2
    },
    h4: {
      color: 'text',
      fontSize: 20,
      fontFamily: 'body',
      fontWeight: 'heading',
      fontStyle: 'normal',
      mt: 4,
      mb: 2
    },
    h5: {
      fontSize: 18,
      fontFamily: 'body',
      fontWeight: 'heading',
      color: 'light',
      mt: 0,
      mb: 2
    },
    p: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    },
    a: {
      color: 'accent',
      fontFamily: 'body',
      fontStyle: 'normal',
      '&:visited': {
        color: 'accent'
      },
      '&:hover': {
        color: 'text'
      },
      '&:active': {
        color: 'text'
      }
    },
    ul: {
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body'
    }
  },
  buttons: {
    home: {
      fontFamily: 'body',
      borderRadius: '3px',
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: 'background',
      fontSize: 16,
      padding: '20px 40px',
      minWidth: '250px',
      cursor: 'pointer',
      color: 'background',
      bg: 'none',
      '&:hover': {
        bg: 'background',
        color: 'text'
      }
    }
  },
  box: {
    banner: {
      mx: 'auto',
      bg: 'banner',
      color: 'accent'
    },
    body: {
      mx: 'auto',
      bg: 'background',
      color: 'text'
    }
  },
  sizes: {
    container: '80vw'
  }
};
