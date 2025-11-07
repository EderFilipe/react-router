import { useState } from "react";
import "./SidebarMenu.css";
import { NavLink } from "react-router-dom";

function SidebarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </button>

      <nav>
        <NavLink to="/">Home</NavLink>
        <a href="#projetos">Projeto</a>
      </nav>
    </div>
  );
}

export default SidebarMenu;
