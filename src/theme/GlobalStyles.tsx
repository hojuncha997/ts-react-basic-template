// GlobalStyles.tsx
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    -webkit-overflow-scrolling: touch;
  }
    
  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Arial', sans-serif;
    
    
  }
  #root {
    width: 100%;
    height: 100%;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyles;
