import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Project from "./pages/Project";
import AddProject from "./pages/AddProject";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project:id" element={<Project />} />

      <Route path="/login" element={<Login />} />
      <Route path="/add-project" element={<AddProject />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
