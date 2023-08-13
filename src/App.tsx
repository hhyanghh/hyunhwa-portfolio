import About from "./components/About";
import CustomContainer from "./components/common/CustomContainer";
import Contact from "./components/Contact";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Works from "./components/Works";

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <About />
      <Skills />
      <Works />
      <Contact />
    </>
  );
};

export default App;
