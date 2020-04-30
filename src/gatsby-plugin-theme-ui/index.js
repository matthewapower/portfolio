import baseTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui"
import merge from "lodash.merge"

export default merge({}, baseTheme, {
  colors: {
    text: "#333",
    background: "#fff",
    primary: "#639",
    secondary: "#ff6347",
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
      }
    }
  },
  fonts: {
    body: 'neue-haas-grotesk-display, sans-serif',
    heading: 'neue-haas-grotesk-display, sans-serif',
    monospace: "Menlo, monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  sizes: {
    container: 2000
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
})