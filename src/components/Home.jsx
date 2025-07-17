import styles from "./Home.module.css";
import profile from "../assets/pooja.jpeg";
import resume from "../assets/Pooja.pdf";

const Home = () => {
  const handleViewandDownload = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <h2>
          Front End Engineer Passionate About Scalable, Performant Interfaces
        </h2>
        <p className={styles.homePara}>
          Building fast, scalable, and accessible web interfaces is my passion.
          I focus on writing clean, maintainable code and enjoy transforming
          complex problems into intuitive user experiences using modern tools
          like React and TypeScript.
        </p>
        <div className={styles.btnCV}>
          <button className={styles.btnGrad} onClick={handleViewandDownload}>
            Download CV
          </button>
        </div>
      </div>

      <img
        src={profile}
        alt="profile"
        onContextMenu={(e) => e.preventDefault()}
        draggable={false}
      />
    </div>
  );
};

export default Home;
