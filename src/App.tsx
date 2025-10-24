import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./assets/pages/Home";
import Login from "./assets/pages/Login";
import Project from "./assets/pages/Project";
import AddProject from "./assets/pages/AddProject";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/project" element={<Project />} />
      <Route path="/add-project" element={<AddProject />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
