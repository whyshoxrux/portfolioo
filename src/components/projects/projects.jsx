import { useSelector } from "react-redux";
import "./projects.scss";
import ProjectCard from "./project-card";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const { projects, theme, socials } = useSelector((state) => state.data);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="cont py-5"
      id="projects"
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
    >
      <h2 className="text-center">Projects</h2>
      <div className="text-center">
        <span
          className="bg-warning d-inline-block px-4 rounded"
          style={{ height: 6 }}
        ></span>
      </div>
      <div className="d-flex align-items-center justify-content-center text-center w-100 py-3 about-description mb-4 flex-column">
        <p className={`w-50 ${theme == 'light' && 'text-dark'}`}>
          Siz bu yerda mening loyihalarimni ko'rishingiz mumkin
        </p>
        <p className={theme == 'light' ? 'text-dark' : ''}>
         Siz ko'proq loyihalarni bu yerdan olishingiz mumkin{" "}
          <a
            href={socials[1].href}
            rel="noreferrer"
            className="text-decoration-none text-info"
            target="_blank"
          >
            GitHub
          </a>{" "}
          
        </p>
      </div>
      <div className="projects">
        {projects &&
          projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Projects;
