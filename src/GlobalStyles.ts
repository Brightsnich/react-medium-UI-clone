import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Import Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..24,400;8..24,700&display=swap');
  /* This is a close approximation of Medium's "sohne" font family */
  @import url('https://fonts.cdnfonts.com/css/sohne');

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.sans};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyles;
