import styles from "./Home.module.css";
import profile from "../assets/pooja.jpeg";
import resume from "../assets/Pooja.pdf";

const Home = () => {
  const handleViewandDownload = () => {
    window.open(resume, "_blank");
  };

  return (
    <div className={styles.homeContainer}>
      <div>
        <span>
          <h2>Crafting Innovative Solution In Software Development</h2>
          <p>
            I am a passionate Frontend Developer with a knack for creating
            seamless user experiences. My expertise spans across modern
            technologies like React.
          </p>
        </span>
        <button className={styles.btnGrad} onClick={handleViewandDownload}>
          Download CV
        </button>
      </div>

      <img src={profile} alt="profile" />
    </div>
  );
};

export default Home;
