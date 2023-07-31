import { Link, useNavigate } from 'react-router-dom';
import styles from './LoginCard.module.css';
import { useState } from 'react';
import loadingGif from '../../../assets/img/loading-gif.gif';
import { useAuth } from '../../../contexts/Auth';

const LoginCard = () => {
  const [fields, setFields] = useState({
    email: '',
    password: '',
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { Login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const validateFields = (value) => {
    if (fields.email === value) {
      return String(value)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    }

    if (fields.password === value) {
      return String(value)
        .toLowerCase()
        .match(/^(?=.*[a-zA-Z0-9])[a-zA-Z0-9]{6,}$/);
    }
  };

  const handleConfirm = async (event) => {
    if (!validateFields(fields.email)) {
      setEmailError(true);
      event.preventDefault();
      return;
    } else {
      setEmailError(false);
    }

    if (!validateFields(fields.password)) {
      setPasswordError(true);
      event.preventDefault();
      return;
    } else {
      setPasswordError(false);
    }

    event.preventDefault();

    setLoading(true);

    const timer = setTimeout(async () => {
      const isValid = await Login(fields);
      console.log(isValid);

      if (!isValid) {
        setEmailError(true);
        setPasswordError(true);
        setLoading(false);
      } else {
        navigate('/home');
      }
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Acesse sua conta</p>
      <form onSubmit={handleConfirm}>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            name="email"
            value={fields.email}
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          {emailError && <span className={styles.error}>Email inválido</span>}
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            name="password"
            value={fields.password}
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            onChange={handleChange}
            required
          />
          {passwordError && <span className={styles.error}>Senha inválida</span>}
        </div>
        <button type={loading ? 'button' : 'submit'} className={styles.button_login}>
          {loading ? <img src={loadingGif} alt="" /> : 'Entrar'}
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
