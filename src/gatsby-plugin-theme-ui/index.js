export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: '"Fira Sans", sans-serif',
    heading: '"Oswald", sans-serif'
  },
  colors: {
    text: '#696969',
    background: '#0B6CFE',
    primary: '#0B6CFE',
  },
  fontWeights: {
    body: 300,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 96
  ],
  text: {
    body: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading"
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }
  },
  sizes: {
    container: 1280,
  },
  buttons: {
    primary: {
      color: "white",
      bg: "linear-gradient(222.67deg, #8FD300 46.39%, #31C005 107.32%);"
    }
  },
  breakpoints: [
    '300px', '768px', '1060px', '1280px', '1600px',
  ],
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body"
    },
    p: {
      fontSize: [2,3],
      fontFamily: "body",
    },
    h1: {
      variant: 'text.heading',
      fontSize: [5,6,7],
    },
    h2: {
      variant: 'text.heading',
      fontSize: [3,4],
      textTransform: 'uppercase',
      color: 'white'
    },
    h3: {
      variant: 'text.heading',
      fontSize: [2,3],
      textTransform: 'uppercase',
      color: 'white'
    },
    a: {
        fontFamily: "body"
    },
    ul: {
      p: 0,
      m: 0
    },
  },
};
