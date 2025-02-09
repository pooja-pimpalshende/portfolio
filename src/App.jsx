import "./App.css";
import Header from "./components/Header/Header";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
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
