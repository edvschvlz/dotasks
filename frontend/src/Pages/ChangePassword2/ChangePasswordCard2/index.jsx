import { useState } from 'react';
import styles from './ChangePasswordCard2.module.css';
import loadingGif from '../../../assets/img/loading-gif.gif';
import { useNavigate } from 'react-router-dom';

const ChangePasswordCard2 = () => {
  const [fields, setFields] = useState({
    password: '',
    passwordAgain: '',
  });
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateFields = (password, passwordAgain) => {
    if (password !== passwordAgain) {
      setPasswordAgainError(true);
    } else {
      setPasswordAgainError(false);
    }

    if (
      !String(password)
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{6,}$/)
    ) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleConfirm = (event) => {
    validateFields(fields.password, fields.passwordAgain);
    event.preventDefault();

    if (passwordError && passwordAgainError) {
      setLoading(true);

      setTimeout(() => {
        navigate('/');
      }, 3000);
    }

    return;
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Digite a nova senha</p>
      <form onSubmit={handleConfirm}>
        <div className={`mb-3 container-input`}>
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
        <div className={`mb-3 container-input`}>
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
        <button type="submit" className={styles.button_send}>
          {loading ? <img className={styles.loader} src={loadingGif} alt="" /> : 'Enviar'}
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordCard2;
