/* eslint-disable react/prop-types */
import { Link } from "react-scroll";
import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.link} to="home" smooth={true} offset={-160}>
        Home
      </Link>
      <Link className={styles.link} to="about" smooth={true} offset={-150}>
        About
      </Link>
      <Link className={styles.link} to="experience" smooth={true} offset={-100}>
        Experience
      </Link>
      <Link className={styles.link} to="contact" smooth={true}>
        Contact
      </Link>
    </div>
  );
};

export default Header;
