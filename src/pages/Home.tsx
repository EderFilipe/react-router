import ProjectList from "../components/ProjectList";
import SidebarMenu from "../components/SidebarMenu";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <SidebarMenu />
      <main>
        <div className="wrapper" id="home">
          <h1>Home</h1>
        </div>
        <ProjectList />
      </main>
    </div>
  );
}

export default Home;
