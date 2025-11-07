import { useParams } from "react-router-dom";
import projects from "../data/projects.json";

function Project() {
  const params = useParams();

  const project = projects.find((item) => item.id === params.id);

  console.log(project);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{project?.titulo}</h1>
      <p>{project?.descricao}</p>
      <img src={project?.imagem} alt="" />
    </div>
  );
}

export default Project;
