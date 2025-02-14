import "./App.css";
import { Element, scroller } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [active, setActive] = useState("home");

  useEffect(() => {
    scroller.scrollTo("home", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -200,
    });
  }, []);
  return (
    <>
      <Header setActive={setActive} />

      <Element name="home">
        <Home />
      </Element>

      <Element name="about">
        <About />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
}

export default App;
