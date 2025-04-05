/* eslint-disable react/prop-types */
import styles from "./Timeline.module.css";

const Timeline = ({ data }) => {
  return (
    <div className={styles.timeline}>
      {data.map((entry, index) => (
        <div key={index} className={styles.entry}>
          <div className={styles.dot}></div>
          <div className={styles.content}>
            <h2 className={styles.timelineHeadingSecondary}>
              {entry.duration}
            </h2>
            <h3 className={styles.timelineHeadingTertiary}>{entry.company}</h3>
            <h4 className={styles.timelineHeading4}>{entry.role}</h4>
            <p className={styles.reponsibilities}>{entry.responsibilities}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
