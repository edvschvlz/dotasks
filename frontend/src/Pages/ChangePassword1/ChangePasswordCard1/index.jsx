import { Link } from 'react-router-dom';
import styles from './ChangePasswordCard1.module.css';

const ChangePasswordCard1 = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Insira o email abaixo para iniciarmos a alteração da sua senha.</p>
      <form>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            className="form-control input"
            id="floatingPassword"
            placeholder="Email"
            required
          />
        </div>
        <button type="submit" className={styles.button_login}>
          Entrar
        </button>
      </form>
      <Link to="/" className={styles.link}>
        Voltar para o login
      </Link>
    </div>
  );
};

export default ChangePasswordCard1;
