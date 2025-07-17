import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>Get to Know Me</h2>
      <div className={styles.aboutSection}>
        <p className={styles.aboutPara}>
          I&apos;m a Front End Engineer who enjoys building performant,
          accessible, and user-focused web applications. Over the past two
          years, I&apos;ve evolved from building simple interfaces to
          architecting scalable front-end systems using modern frameworks and
          tools like React, TypeScript, and Nx.
        </p>
        <p className={styles.aboutPara}>
          I thrive at the intersection of design and development—translating
          UI/UX ideas into responsive, production-ready experiences. I&apos;m
          especially focused on clean code, reusability, and performance
          optimization.
        </p>
        <p className={styles.aboutPara}>
          When I&apos;m not coding, I&apos;m exploring new frontend
          technologies, refining my skills, or recharging through yoga, cooking,
          and meditation.
        </p>
      </div>
    </div>
  );
};

export default About;
