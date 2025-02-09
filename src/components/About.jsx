import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <span>
        <h2>Meet Your Next Software Development Partner</h2>
        <p>
          With 2 years of experience in software engineering, I focus on
          developing smooth user experiences. My journey has transitioned from
          programming basic applications to taking on more complex projects that
          encourage innovation.
        </p>
      </span>
      <button>Learn</button>
    </div>
  );
};

export default About;
