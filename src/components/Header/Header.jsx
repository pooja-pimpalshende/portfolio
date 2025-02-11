/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import styles from "../Header/Header.module.css";

const Header = ({ setActive }) => {
  return (
    <div className={styles.header}>
      <Link
        className={styles.link}
        to="home"
        smooth={true}
        offset={-80}
        onClick={() => setActive("home")}
      >
        Home
      </Link>
      <Link
        className={styles.link}
        to="about"
        smooth={true}
        offset={-100}
        onClick={() => setActive("about")}
      >
        About
      </Link>
      <Link
        className={styles.link}
        to="experience"
        smooth={true}
        offset={-100}
        onClick={() => setActive("experience")}
      >
        Experience
      </Link>
      <Link
        className={styles.link}
        to="contact"
        smooth={true}
        onClick={() => setActive("contact")}
      >
        Contact
      </Link>
    </div>
  );
};

export default Header;
