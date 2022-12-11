import React, {ReactElement} from "react";
import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../general/styles/themes";
import useThemeMode from "../../hooks/useThemeMode";

const ThemeContext = ({children}: any): ReactElement => {
  const {theme} = useThemeMode();
  const themeMode = theme === "dark" ? darkTheme : lightTheme;

  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
