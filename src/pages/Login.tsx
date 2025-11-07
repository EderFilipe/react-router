import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CryptoJS, { SHA256 } from 'crypto-js';
import usersData from '../data/users.json';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (user) {
      navigate('/add-projeto');
    }
  }, [navigate]);

  const handleSubmit = async () => {
    const user = usersData.find((usr) => usr.email === email);

    const hashedPassword = SHA256(password).toString(CryptoJS.enc.Hex);

    if (user && hashedPassword === user.password) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/add-projeto');
    } else {
      setError('Email ou senha inválidos!');
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Entrar na área administrativa</h3>
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          id="email"
          size={ 40 }
          value={ email }
          onChange={ (e) => { setEmail(e.target.value); if (error) setError(''); } }
        />

        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          type="password"
          value={ password }
          onChange={ (e) => {
            setPassword(e.target.value);
            setError((prevState) => (error ? '' : prevState));
          } }
        />

        {error && <span className="error-message">{error}</span>}

        <button onClick={ handleSubmit }>Entrar</button>
      </div>
    </div>
  );
}

export default Login;