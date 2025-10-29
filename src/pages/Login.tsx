import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/add-project");
  };

  return (
    <div className="login">
      <div className="login__container">
        <h3>Entrar na aŕea administrativa</h3>
        <label htmlFor="email">E-mail</label>
        <input type="text" size={40} />

        <label htmlFor="email">Senha</label>
        <input type="password" />

        <button onClick={handleSubmit}>Entrar</button>
      </div>
    </div>
  );
}

export default Login;
