import styles from "./Project.module.css";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import projectsData from "../data/projects.json";

const imageMap = {
  "proj1.png": proj1,
  "proj2.png": proj2,
};

const iconMap = {
  FaReact: <FaReact />,
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJsSquare: <FaJsSquare />,
};

const Project = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projectsData.map((project) => (
          <div className={styles.card} key={project.id}>
            <div className={styles.cardHeading}>
              <h2 className={styles.heading}>{project.title}</h2>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={25} className={styles.gitIcon} />
              </a>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                className={styles.img}
                src={imageMap[project.image]}
                alt={project.title}
              />
            </a>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStackIcons}>
              {project.techStack.map((tech) => (
                <span key={tech.name} className={styles.techIcon}>
                  <span style={{ color: tech.color, fontSize: "20px" }}>
                    {iconMap[tech.icon]}
                  </span>

                  {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
