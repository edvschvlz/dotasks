import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './RegisterCard.module.css';
import axios from 'axios';

const RegisterCard = () => {
  const [isInvalid, setIsInvalid] = useState([]);
  const [visible, setVisible] = useState(false);
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const repeatPassword = useRef();

  const navigate = useNavigate();

  const handleSubmit = () => {
    const fields = [
      { input: name.current.name, value: name.current.value },
      { input: email.current.name, value: email.current.value },
      { input: password.current.name, value: password.current.value },
      { input: repeatPassword.current.name, value: repeatPassword.current.value },
    ];

    const fieldsInvalid = [];

    fields.forEach((field) => {
      if (!field.value) {
        fieldsInvalid.push(field.input);
      }

      if (field.input === 'name' && field.value.length < 2) {
        fieldsInvalid.push(field.input);
      }

      if (field.input === 'email' && !validateEmail(field.value)) {
        fieldsInvalid.push(field.input);
      }

      if (field.input === 'password' && field.value.length < 6) {
        fieldsInvalid.push(field.input);
      }
    });

    if (fieldsInvalid.length <= 0) {
      registerUser();
    }

    setIsInvalid(fieldsInvalid);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const registerUser = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/users',
      data: {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value,
      },
    }).then(() => {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
        navigate('/login');
      }, 3000);

      return () => clearTimeout(timer);
    });
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Nova Conta</p>
      <div className={`mb-3 container-input`}>
        <input
          type="text"
          name="name"
          ref={name}
          className="form-control"
          placeholder="Nome"
          required
        />
      </div>
      <div className={`mb-3 container-input`}>
        <input
          type="email"
          className="form-control"
          ref={email}
          name="email"
          placeholder="Email"
          required
        />
      </div>
      <div className={`mb-3 container-input`}>
        <input
          type="password"
          className="form-control"
          ref={password}
          name="password"
          placeholder="Senha"
          required
        />
      </div>
      <div className={`mb-3 container-input`}>
        <input
          type="password"
          className="form-control"
          ref={repeatPassword}
          name="repeatPassword"
          placeholder="Senha novamente"
          required
        />
      </div>
      <button type="submit" onClick={handleSubmit} className={styles.button_register}>
        Registrar
      </button>
      <Link to="/" className={styles.link}>
        Já possui conta? Clique aqui para fazer login
      </Link>
    </div>
  );
};

export default RegisterCard;
