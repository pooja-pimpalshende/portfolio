import { Link } from "react-scroll";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleOnClick = () => {
    setIsNavOpen((prev) => !prev);
  };
  return (
    <div className={`${styles.header} ${isNavOpen ? styles.showNav : ""}`}>
      <div className={`${styles.navLinks} `}>
        <Link
          className={styles.link}
          to="home"
          smooth={true}
          containerId="scrollable-container"
          onClick={handleOnClick}
        >
          Home
        </Link>
        <Link
          className={styles.link}
          to="about"
          smooth={true}
          containerId="scrollable-container"
          onClick={handleOnClick}
        >
          About
        </Link>
        <Link
          className={styles.link}
          to="experience"
          smooth={true}
          containerId="scrollable-container"
          onClick={handleOnClick}
        >
          Experience
        </Link>
        <Link
          className={styles.link}
          to="project"
          smooth={true}
          containerId="scrollable-container"
          onClick={handleOnClick}
        >
          Project
        </Link>
        <Link
          className={styles.link}
          to="contact"
          smooth={true}
          containerId="scrollable-container"
          onClick={handleOnClick}
        >
          Contact
        </Link>
      </div>
      <button className={styles.btnMobileNav} onClick={handleOnClick}>
        <ion-icon
          className={styles.iconMobileNav}
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          className={styles.iconMobileNav}
          name="close-outline"
        ></ion-icon>
      </button>
    </div>
  );
};

export default Header;
