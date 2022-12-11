import {createGlobalStyle, withTheme} from "styled-components";
import {ThemeProps} from "./themes";

type GlobalThemeProps = {
  theme: ThemeProps;
};

const GlobalStyles = createGlobalStyle`

:root {
    // {********dark-mode*******}
    --dark-background: #1A1B27;
    --dark-text: #F5F5F7;

    // {********light-mode*******}
    --light-background: #f2f2f2;
    --light-text: #2E0509;
  }

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500
}

body {
  background-color: ${({theme}: GlobalThemeProps) => theme.background};
  color: ${({theme}: GlobalThemeProps) => theme.background};
  font-family: 'Roboto', sans-serif;
  overflow-x: hidden;
}

label {
  color: ${({theme}: GlobalThemeProps) => theme.label}
}

button {
  background-color: ${({theme}) => theme.text};
  color: ${({theme}) => theme.background}
}

`;

export default withTheme(GlobalStyles);
