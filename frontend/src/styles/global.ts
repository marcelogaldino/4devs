import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F0F0F5;
    color: #312E38;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  h1, h2, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
