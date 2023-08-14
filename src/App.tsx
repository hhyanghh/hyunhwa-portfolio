import About from "./components/About";
import CustomContainer from "./components/common/CustomContainer";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, orange } from "@mui/material/colors";
import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4682A9",
    },
    secondary: {
      main: orange[300],
    },
    warning: {
      main: "#C92C6D",
    },
    text: {
      primary: "#332C39",
      secondary: "#ffffff",
    },
    background: {
      default: "#F0EEED",
      paper: "#F1F0E8",
    },
  },
  typography: {
    fontFamily: "NanumSquareNeo",
    h5: {
      fontWeight: 800,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <Main />
      <About />
      <Skills />
      <Works />
      <Contact />
    </ThemeProvider>
  );
};

export default App;
