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
import * as Unicons from "@iconscout/react-unicons";

const App = () => {
  return (
    <ThemeContext>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        <APITest />
        <Login />
        <p>
          A text <Unicons.UilWhatsapp style={{color: "red"}} />
        </p>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
