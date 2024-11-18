import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

import CustomContainer from "./components/common/CustomContainer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { red, orange } from "@mui/material/colors";
import "./App.css";

export const theme = createTheme({
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
      <Router>
        <Routes>
          {/* Home 페이지 */}
          <Route path="/" element={<Home />} />

          {/* 프로젝트 상세 페이지 */}
          <Route path="/works/:projectId" element={<ProjectDetail />} />

          {/* 404 페이지 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
