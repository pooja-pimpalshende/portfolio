import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2>Get In Touch</h2>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon}>
          <FaRegEnvelope size={40} />
          <h3>pooja.pimpalshende215@gmail.com</h3>
        </div>

        <div className={styles.contactIcon}>
          <CiPhone size={40} />
          <h3>+47 41249551</h3>
        </div>
        <div className={styles.contactIcon}>
          <FaLinkedin size={40} />
          <h3>linkedin.com/in/poojapimpalshende</h3>
        </div>
        <div className={styles.contactIcon}>
          <FaGithub size={40} />
          <h3>github.com/pooja-pimpalshende</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
