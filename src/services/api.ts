import type { Project } from "../types";

const API_URL = "http://localhost:5000";

export const fetchAllProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  const projects: Project[] = await response.json();
  return projects;
};

export const addProject = async (newProject: Project) => {
  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProject),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar");
  }

  const project: Project = await response.json();
  return project;
};
