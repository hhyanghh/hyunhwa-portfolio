import { useNavigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Nav from "../components/Nav";
import Skills from "../components/Skills";
import Project from "../components/Project";

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
        <section id="Project">
          <Project
            onProjectClick={(projectId) => navigate(`/projects/${projectId}`)}
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
