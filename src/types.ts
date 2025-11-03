export type Project = {
  id: string;
  titulo: string;
  tags: string[];
  imagem: string;
  linkRepositorio: string;
  descricao: string;
};

export type Login = {
  accessToken: string;
  user: {
    email: string;
    nome: string;
    id: number;
  }
};
