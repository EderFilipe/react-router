import { useState } from 'react';
import withAuth from '../components/withAuth';
import LogoutButton from '../components/Logout';
import type { Project } from '../types';
import './AddProject.css';
import { addProject } from '../services/api';

function AddProject() {
  const [newProject, setNewProject] = useState<Partial<Project>>({});
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      addProject(newProject as Project);
      setMessage('Projeto adicionado com sucesso!');
    } catch (error) {
      setMessage('Erro ao adicionar o projeto.');
    }
  };
  return (
    <div className="add__project">
      <h1>Adicionar novo Projeto</h1>
      <LogoutButton />
      <form onSubmit={ handleSubmit }>
        <input
          type="text"
          placeholder="ID"
          onChange={ (e) => setNewProject((prev) => ({ ...prev, id: e.target.value })) }
        />
        <input
          type="text"
          placeholder="Título"
          onChange={ (e) => setNewProject((prev) => ({
            ...prev, titulo: e.target.value,
          })) }
        />
        <input
          type="text"
          placeholder="Tags (separadas por vírgula)"
          onChange={ (e) => setNewProject((prev) => ({
            ...prev,
            tags: e.target.value.split(','),
          })) }
        />
        <input
          type="text"
          placeholder="Imagem URL"
          onChange={ (e) => setNewProject((prev) => ({
            ...prev, imagem: e.target.value,
          })) }
        />
        <input
          type="text"
          placeholder="Link do Repositório"
          onChange={ (e) => setNewProject((prev) => ({
            ...prev,
            linkRepositorio: e.target.value,
          })) }
        />
        <textarea
          placeholder="Descrição"
          onChange={ (e) => setNewProject((prev) => ({
            ...prev, descricao: e.target.value,
          })) }
        />
        <button type="submit">Adicionar Projeto</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default withAuth(AddProject);
