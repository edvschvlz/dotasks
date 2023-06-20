import { Link } from 'react-router-dom';
import './RegisterCard.css';

const RegisterCard = () => {
  return (
    <div className="card">
      <p className="register-card-titulo">Nova Conta</p>
      <form>
        <div className="mb-3 container-input">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome"
            required
          />
        </div>
        <div className="mb-3 container-input">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-3 container-input">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            required
          />
        </div>
        <div className="mb-3 container-input">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha novamente"
            required
          />
        </div>
        <button type="submit" className="botao-entrar">
          Registrar
        </button>
      </form>
      <p className="register-card-link">
        Já possui conta? <Link to="/">Clique aqui para fazer login</Link>
      </p>
    </div>
  );
};

export default RegisterCard;
