import "./App.css";
import Header from "./components/Header/Header";
import { Element } from "react-scroll";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Header />
      <Element
        name="home"
        // className="h-screen flex items-center justify-center"
      >
        <Home />
      </Element>
      <Element name="about" className="h-screen">
        <h2>Welcome about</h2>
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
