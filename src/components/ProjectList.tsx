import "./ProjectList.css";
import { Link } from "react-router-dom";
import projects from "../data/projects.json";

function ProjectList() {
  return (
    <section className="wrapper" id="projetos">
      <h1>PROJETOS</h1>
      <div className="projects-list">
        {projects.map((project) => (
          <Link key={project.id} to={`/project/${project.id}`}>
            <div className="project-item">
              <h3>{project.titulo}</h3>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <img src={project.imagem} alt={project.titulo} />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ProjectList;
