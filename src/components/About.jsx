import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>Meet Your Next Software Development Partner</h2>
      <div className={styles.aboutSection}>
        <p className={styles.aboutPara}>
          I&apos;m a software engineer passionate about building seamless,
          user-friendly experiences that balance elegant design with strong
          engineering principles. My work revolves around crafting applications
          that not only function smoothly but also feel intuitive and engaging
          for users.
        </p>
        <p className={styles.aboutPara}>
          Over the past two years, I&apos;ve grown from developing basic
          applications to tackling more complex projects that push the
          boundaries of innovation. I thrive in the space where design meets
          development, ensuring that every product I work on is both visually
          polished and technically robust.
        </p>
        <p className={styles.aboutPara}>
          Beyond coding, I&apos;m always exploring new technologies, refining my
          problem-solving skills, and staying up-to-date with the latest in
          UI/UX trends. When I&apos;m not at my desk, you&apos;ll likely find me
          cooking, eating, practicing yoga, or meditating.
        </p>
      </div>
    </div>
  );
};

export default About;
