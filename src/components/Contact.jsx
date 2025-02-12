import { FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./Contact.module.css";
import { FaRegEnvelope } from "react-icons/fa6";
import { CiPhone } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Contact = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setTooltipVisible(true);
        setTimeout(() => setTooltipVisible(false), 1000);
      },
      (err) => console.error("Could not copy text: ", err)
    );
  };

  return (
    <div className={styles.contactContainer}>
      <h2>Get In Touch</h2>
      <p>
        I&apos;m eager to contribute my software development skills and passion
        to a dynamic team. If you&apos;re looking for a dedicated and innovative
        developer, I&apos;d love to connect—feel free to reach out through any
        of the contact methods below.
      </p>
      <div className={styles.contactIcons}>
        <div className={styles.contactIcon}>
          <a href="mailto:pooja.pimpalshende215@gmail.com">
            <FaRegEnvelope size={40} />
          </a>
        </div>

        <div
          className={styles.contactIcon}
          onClick={() => copyToClipboard("+47 41249551")}
        >
          <CiPhone size={40} />
          {tooltipVisible && <span className={styles.tooltip}>Copied!</span>}
        </div>

        <div className={styles.contactIcon}>
          <a
            href="https://linkedin.com/in/poojapimpalshende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} />
          </a>
        </div>

        <div className={styles.contactIcon}>
          <a
            href="https://github.com/pooja-pimpalshende"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 Pooja Pimpalshende</p>
      </div>
    </div>
  );
};

export default Contact;
