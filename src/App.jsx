import "./App.css";
import { useEffect, useState } from "react";
import { Element, scroller } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Project from "./components/Project";
import AuroraBg from "./components/AuroraBg";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("home");

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);
  return (
    <div className="app">
      <AuroraBg />
      <Header setActive={setActive} />

      <main className="main" id="scrollable-container">
        <Element name="home">
          <Home />
        </Element>

        <Element name="about">
          <About />
        </Element>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="project">
          <Project />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </main>
    </div>
  );
}

export default App;
