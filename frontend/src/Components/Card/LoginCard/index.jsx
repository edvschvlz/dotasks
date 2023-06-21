import { Link } from 'react-router-dom';
import styles from './LoginCard.module.css';

const LoginCard = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Acesse sua conta</p>
      <form>
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
        <button type="submit" className={styles.button_login}>
          Entrar
        </button>
      </form>
      <Link to="/change-password-1" className={styles.link}>
        Esqueceu sua senha?
      </Link>
      <Link to="/register" className={styles.button_register}>
        Criar conta
      </Link>
      <button type="button" className={styles.button_google}>
        Continuar com a conta do Google
      </button>
    </div>
  );
};

export default LoginCard;
