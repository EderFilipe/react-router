import { useParams } from "react-router-dom";
import SidebarMenu from "../components/SidebarMenu";
import projects from "../data/projects.json";

function Project() {
  const params = useParams();

  const project = projects.find((item) => item.id === params.id);

  console.log(project);

  return (
    <div style={{ display: "flex" }}>
      <SidebarMenu />
      <div style={{ padding: "1 rem" }}>
        <h1>{project?.titulo}</h1>
        <p>{project?.descricao}</p>
        <img src={project?.imagem} alt="" />
      </div>
    </div>
  );
}

export default Project;
