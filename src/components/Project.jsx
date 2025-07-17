import styles from "./Project.module.css";
import proj1 from "../assets/proj1.png";
import proj3 from "../assets/proj3.png";
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaReact } from "react-icons/fa";
import projectsData from "../data/projects.json";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiNx,
  SiReactquery,
  SiStyledcomponents,
  SiSupabase,
} from "react-icons/si";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import NordicNestFinal from "../assets/NordicNestFinal.mp4";
import nordicNestPoster from "../assets/nordicNestPoster.png";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";

const imageMap = {
  "proj1.png": proj1,
  "proj3.png": proj3,
  "nordicNestPoster.png": nordicNestPoster,
};

const iconMap = {
  FaReact: <FaReact />,
  FaTypescript: <BiLogoTypescript />,
  FaJavascript: <BiLogoJavascript />,
  Nx: <SiNx />,
  StyledCssComponent: <SiStyledcomponents />,
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaTilwindCss: <RiTailwindCssFill />,
  SiSupabase: <SiSupabase />,
  SiReactquery: <SiReactquery />,
  HiOutlineSwitchHorizontal: <HiOutlineSwitchHorizontal />,
  FaJsSquare: <FaJsSquare />,
};

const videoMap = {
  "NordicNestFinal.mp4": NordicNestFinal,
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
              <div className={styles.mediaWrapper}>
                {project.image && (
                  <img
                    className={styles.img}
                    src={imageMap[project.image]}
                    alt={project.title}
                  />
                )}
                {project.video && (
                  <video
                    className={styles.img}
                    src={videoMap[project.video]}
                    muted
                    loop
                    preload="metadata"
                    poster={imageMap[project.poster]}
                    onMouseOver={(e) => {
                      e.target.src = videoMap[project.video];
                      e.target.play();
                    }}
                    onMouseOut={(e) => {
                      e.target.pause();
                      e.target.removeAttribute("src");
                      e.target.load();
                    }}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                )}
              </div>
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
