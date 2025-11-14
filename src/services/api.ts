import type { Login, Project } from "../types";

const API_URL = "http://localhost:5000";

export const fetchAllProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  const projects: Project[] = await response.json();
  return projects;
};

const token = localStorage.getItem("token");

export const addProject = async (newProject: Project) => {

  const response = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newProject),
  });

  if (!response.ok) {
    throw new Error("Erro ao adicionar um projeto");
  }

  const project: Project = await response.json();
  return project;
};

export const auth = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("E-mail ou senha incorretos.");
  }
  const token:Login = await response.json();
  return token;
};
