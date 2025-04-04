import styles from "./Project.module.css";
import proj1 from "../assets/proj1.png";
import { FaGithub, FaHtml5, FaReact } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "A Responsive Meal Subscription Platform",
    description:
      "A meal subscription website designed to provide users with healthy and personalized meal plans. The project focuses on a modern, clean UI with a responsive layout.",
    image: proj1,
    link: "https://nutribites.netlify.app/",
    github: "https://github.com/pooja-pimpalshende/nutribites",
  },
  {
    id: 2,
    title: "E-Commerce Website",
    description:
      "A technology company, with a major focus on consumer well-being through a healthy diet.",
    image: proj1,
    link: "https://nutribites.netlify.app/",
    github: "https://github.com/pooja-pimpalshende/nutribites",
  },
];
const Project = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div className={styles.card} key={project.id}>
            <h2 className={styles.heading}>{project.title}</h2>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.img}
                src={project.image}
                alt={project.title}
              />
            </a>
            <p className={styles.description}>{project.description}</p>
            <p>
              <FaReact />
            </p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
