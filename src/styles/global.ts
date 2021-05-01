import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
      font-family: 'Poppins', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: #F5F5F5;
    color: #252525;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, textarea, select, button {
    font: 400 1rem 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  strong, h1, h2, h3, h4, h5, h6 {
      font-weight: 700;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

`;
