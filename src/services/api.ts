import type { Project } from "../types";

const API_URL = 'http://localhost:5000';

export const fetchAllProjects = async () => {
  const response = await fetch(`${API_URL}/projects`);
  const projects: Project[] = await response.json();
  return projects;
};
