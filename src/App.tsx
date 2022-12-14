import "./styles/scss/main.scss";
import Login from "./containers/Login/Login";
import {ThemeProvider} from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
import {
  darkTheme,
  // lightTheme
} from "./styles/styles/themes";
import GlobalStyles from "./styles/styles/Global";
import APITest from "./containers/APITest/APITest";

const App = () => {
  return (
    <ThemeContext>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {/* <Login /> */}
        <APITest />
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
