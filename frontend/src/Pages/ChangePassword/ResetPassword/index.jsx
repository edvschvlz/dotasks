import { useState } from 'react';
import styles from './ResetPassword.module.css';
import loadingGif from '../../../assets/img/loading-gif.gif';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPassword = ({ userEmail }) => {
  const [fields, setFields] = useState({
    password: '',
    passwordAgain: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleConfirm = () => {
    if (
      fields.password !== fields.passwordAgain ||
      !String(fields.password)
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{6,}$/)
    ) {
      setPasswordAgainError(true);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      await axios({
        method: 'put',
        url: `http://localhost:5000/users/resetPassword`,
        data: {
          email: userEmail,
          password: fields.password,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => {
          navigate('/');
        })
        .catch(() => {
          setPasswordError(false);
          setPasswordAgainError(false);
          setLoading(false);
          return false;
        });
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Digite a nova senha</p>
      <div className={`mb-3 ${styles.container_input}`}>
        <input
          type="password"
          name="password"
          className="form-control"
          value={fields.password}
          id="floatingPassword"
          placeholder="Senha"
          onChange={handleChange}
          required
        />
      </div>
      <div className={`mb-3 ${styles.container_input}`}>
        <input
          type="password"
          name="passwordAgain"
          className="form-control"
          value={fields.passwordAgain}
          id="floatingPassword"
          placeholder="Senha novamente"
          onChange={handleChange}
          required
        />
      </div>
      {passwordError && <span className={styles.error}>Senha inválida</span>}
      {passwordError && passwordAgainError && <span className={styles.error}>/ </span>}
      {passwordAgainError && <span className={styles.error}>Senhas não coincidem</span>}
      <button
        type="submit"
        onClick={handleConfirm}
        disabled={loading}
        className={styles.button_send}
      >
        {loading ? <img src={loadingGif} alt="" /> : 'Redefinir'}
      </button>
    </div>
  );
};

export default ResetPassword;
