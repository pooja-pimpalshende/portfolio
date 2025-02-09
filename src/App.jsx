import "./App.css";
import Header from "./components/Header/Header";
import { Element } from "react-scroll";
import Home from "./components/Home";
import About from "./components/About";

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
        <h2>My Experience</h2>
      </Element>
      <Element name="contact">
        <h2>Get in touch</h2>
      </Element>
    </>
  );
}

export default App;
