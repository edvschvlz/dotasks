import { Link } from 'react-router-dom';
import styles from './RegisterCard.module.css';

const RegisterCard = () => {
  return (
    <div className={styles.card}>
      <p>Nova Conta</p>
      <form>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha novamente"
            required
          />
        </div>
        <button type="submit" className={styles.button_register}>
          Registrar
        </button>
      </form>
      <Link to="/" className={styles.link}>
        Já possui conta? Clique aqui para fazer login
      </Link>
    </div>
  );
};

export default RegisterCard;
