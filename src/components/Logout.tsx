import { useNavigate } from 'react-router-dom';

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/login'); // Redireciona o usuário para a página de login após o logout
  };

  return (
    <button onClick={ handleLogout }>Logout</button>
  );
}

export default LogoutButton;