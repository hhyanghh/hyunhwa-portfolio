import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import Works from "../components/Works";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav />
      <main>
        <section id="main">
          <Main />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="Works">
          <Works
            onProjectClick={(projectId) => navigate(`/works/${projectId}`)}
          />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default Home;
