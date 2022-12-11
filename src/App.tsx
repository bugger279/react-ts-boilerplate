import "./general/scss/main.scss";
import Login from "./components/Login";
import {ThemeProvider} from "styled-components";
import ThemeContext from "./contexts/ThemeContext";
import {darkTheme, lightTheme} from "./general/styles/themes";
import GlobalStyles from "./general/styles/Global";

const App = () => {
  return (
    <ThemeContext>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <Login />
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
