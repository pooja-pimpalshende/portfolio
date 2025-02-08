import styles from "./Home.module.css";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <span>
        <h2>Crafting Innovative Solution in Software Development</h2>
        <p>
          Passionate Software Engineer with over 2 years of experience in
          building scalable, user-friendly web applications. Skilled in
          full-stack development with expertise in React and Java. Adept at
          problem-solving and delivering high-quality software solutions.
          Enthusiastic about renewable energy and leveraging technology to drive
          positive change.
        </p>
      </span>
      <img src={profile} alt="profile" />
    </div>
  );
};

export default Home;
