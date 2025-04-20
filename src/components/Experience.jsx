import Timeline from "./Timeline";
import styles from "./Experience.module.css";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experience}>
        <h2>Professional Journey and Key Milestones</h2>
        <p className={styles.experiencePara}>
          Explore my career journey, showcasing significant roles and
          accomplishments. Each position reflects my growth and expertise in
          frontend development, complemented by experience in technical support.
        </p>
      </div>
      <Timeline data={experience} />
    </div>
  );
};

export default Experience;
