import "./App.css";
import Header from "./components/Header/Header";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("home");
  return (
    <>
      <Header setActive={setActive} />
      {active === "home" && (
        <Element name="home">
          <Home />
        </Element>
      )}
      {active === "about" && (
        <Element name="about">
          <About />
        </Element>
      )}
      {active === "experience" && (
        <Element name="experience">
          <Experience />
        </Element>
      )}
      {active === "contact" && (
        <Element name="contact">
          <Contact />
        </Element>
      )}
    </>
  );
}

export default App;
