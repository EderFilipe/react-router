import { useEffect, useState } from "react";
import "./ProjectList.css";
import { Link } from "react-router-dom";
import type { Project } from "../types";
import { fetchAllProjects } from "../services/api";

function ProjectList() {
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAllProjects();
        setProjects(result);
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
      if (loading) {
        return <p>Carregando...</p>
      }

      if (error) {
        return <h1>{error}</h1>;
      }

  return (
    <section className="wrapper" id="projetos">
      <h1>PROJETOS</h1>
      <div className="projects-list">
        {projects?.map((project) => (
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
