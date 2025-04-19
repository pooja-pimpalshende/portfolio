import { Link } from "react-scroll";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link
        className={styles.link}
        to="home"
        smooth={true}
        containerId="scrollable-container"
      >
        Home
      </Link>
      <Link
        className={styles.link}
        to="about"
        smooth={true}
        containerId="scrollable-container"
      >
        About
      </Link>
      <Link
        className={styles.link}
        to="experience"
        smooth={true}
        containerId="scrollable-container"
      >
        Experience
      </Link>
      <Link
        className={styles.link}
        to="project"
        smooth={true}
        containerId="scrollable-container"
      >
        Project
      </Link>
      <Link
        className={styles.link}
        to="contact"
        smooth={true}
        containerId="scrollable-container"
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
