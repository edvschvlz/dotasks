import { Link } from 'react-router-dom';
import './ChangePasswordCard.css';

const ChangePasswordCard = () => {
  return (
    <div className="card">
      <p className="card-titulo">Redefinir senha</p>
      <p className="card-titulo-texto">
        Insira o email abaixo para iniciarmos a alteração da sua senha.
      </p>
      <div className="mb-3 container-input">
        <input
          type="email"
          className="form-control"
          id="floatingPassword"
          placeholder="Email"
          required
        />
      </div>
      <button type="submit" className="botao-entrar">
        Entrar
      </button>
      <Link to="/">Voltar para o login</Link>
    </div>
  );
};

export default ChangePasswordCard;
