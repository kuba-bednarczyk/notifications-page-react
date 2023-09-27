import { createGlobalStyle } from 'styled-components';

import '@fontsource/plus-jakarta-sans';
import '@fontsource/poppins';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.backgroundColor};
    font-family: 'Poppins', sans-serif;
    /* font-family: 'Plus Jakarta Sans', sans-serif; */
    font-size: 16px;
  }
`;

export default GlobalStyles;
