import { Link } from 'react-router-dom';
import styles from './SendMail.module.css';
import { useState } from 'react';
import loadingGif from '../../../assets/img/loading-gif.gif';
import axios from 'axios';

const SendMail = ({ setType, setUserEmail }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (
      !email ||
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        )
    ) {
      setEmailError(true);
      return;
    }

    const user = await axios({
      method: 'get',
      url: `http://localhost:5000/users/${email}`,
    })
      .then((response) => {
        const data = response.data;

        return data;
      })
      .catch(() => {
        return false;
      });

    if (!user) {
      setEmailError(true);
      return;
    }

    setLoading(true);

    const timer = setTimeout(async () => {
      await axios({
        method: 'post',
        url: `http://localhost:5000/users/sendConfirmationCode/${email}`,
      })
        .then(() => {
          setUserEmail(email);
          setType(2);
        })
        .catch(() => {
          setEmailError(false);
          setLoading(false);
          return;
        });
    }, 3000);

    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Insira o email abaixo para iniciarmos a alteração da sua senha.</p>
      <div className={`mb-3 ${styles.container_input}`}>
        <input
          type="email"
          className="form-control input"
          id="floatingPassword"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {emailError && <span className={styles.error}>Email inválido</span>}
      </div>
      <button
        type="submit"
        disabled={loading}
        onClick={handleSubmit}
        className={styles.button_login}
      >
        {loading ? <img src={loadingGif} alt="" /> : 'Enviar'}
      </button>
      <Link to="/" className={styles.link}>
        Voltar para o login
      </Link>
    </div>
  );
};

export default SendMail;
