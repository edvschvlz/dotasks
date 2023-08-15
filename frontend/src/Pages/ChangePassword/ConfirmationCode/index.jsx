import { Link } from 'react-router-dom';
import styles from './ConfirmationCode.module.css';
import { useState } from 'react';
import loadingGif from '../../../assets/img/loading-gif.gif';
import axios from 'axios';

const ConfirmationCode = ({ setType, userEmail }) => {
  const [token, setToken] = useState('');
  const [tokenError, setTokenError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!token) {
      setTokenError(true);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      await axios({
        method: 'get',
        url: `http://localhost:5000/users/verifyConfirmationCode?email=${userEmail}&token=${token}`,
      })
        .then(() => {
          setType(3);
        })
        .catch(() => {
          setTokenError(false);
          setLoading(false);
          return false;
        });
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Insira o token abaixo para alterar sua senha.</p>
      <div className={`mb-3 ${styles.container_input}`}>
        <input
          type="text"
          className="form-control input"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="Token"
        />
        {tokenError && <span className={styles.error}>Token inválido</span>}
      </div>
      <button
        type="submit"
        disabled={loading}
        onClick={handleSubmit}
        className={styles.button_submit}
      >
        {loading ? <img src={loadingGif} alt="" /> : 'Verificar'}
      </button>
      <Link to="/" className={styles.link}>
        Voltar para o login
      </Link>
    </div>
  );
};

export default ConfirmationCode;
