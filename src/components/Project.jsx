import styles from "./Project.module.css";
import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "A Responsive Meal Subscription Platform",
    description:
      "A meal subscription website designed to provide users with healthy and personalized meal plans. The project focuses on a modern, clean UI with a responsive layout.",
    image: proj1,
    techStack: [
      { name: "React", icon: <FaReact />, color: "#61DAFB" },
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3 />, color: "#264de4" },
    ],
    link: "https://nutribites.netlify.app/",
    github: "https://github.com/pooja-pimpalshende/nutribites",
  },
  {
    id: 2,
    title: "Recipe Search Application",
    description:
      "A dynamic recipe search application where users can search for recipes, view ingredients, adjust servings, and even bookmark their favorites.",
    image: proj2,
    techStack: [
      { name: "HTML", icon: <FaHtml5 />, color: "#E34F26" },
      { name: "CSS", icon: <FaCss3 />, color: "#264de4" },
      {
        name: "Javascript",
        icon: <FaJsSquare />,
        color: "#F7DF1E",
      },
    ],
    link: "https://forkify-the-recipe-search.netlify.app/",
    github:
      "https://github.com/pooja-pimpalshende/javascript/tree/main/forkify",
  },
];
const Project = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.grid}>
        {projects.map((project) => (
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
                src={project.image}
                alt={project.title}
              />
            </a>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.techStackIcons}>
              {project.techStack.map((tech) => (
                <span key={tech.name} className={styles.techIcon}>
                  <span style={{ color: tech.color, fontSize: "20px" }}>
                    {tech.icon}
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
