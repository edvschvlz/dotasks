import { useState } from 'react';
import styles from './SettingsModal.module.css';
import { useAuth } from '../../../contexts/Auth';
import axios from 'axios';

const SettingsModal = ({ showModal, setShowModal }) => {
  const { user, token } = useAuth();
  const userName = JSON.parse(user).name;
  const userEmail = JSON.parse(user).email;
  const [fields, setFields] = useState({
    name: userName,
    email: userEmail,
    newPassword: '',
    passwordAgain: '',
  });
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const validateFields = (value) => {
    if (fields.name === value) {
      return fields.name.match(/^[a-zA-Z]{2,}$/);
    }

    if (fields.email === value) {
      return String(fields.email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    }

    if (fields.newPassword === value) {
      return String(fields.newPassword)
        .toLowerCase()
        .match(/^[a-zA-Z0-9]{6,}$/);
    }

    if (fields.newPassword === value) {
      return fields.newPassword === fields.passwordAgain;
    }
  };

  const handleConfirm = (event) => {
    event.preventDefault();

    if (!validateFields(fields.name)) {
      setNameError(true);
      event.preventDefault();
      return;
    } else {
      setNameError(false);
    }

    if (!validateFields(fields.email)) {
      setEmailError(true);
      event.preventDefault();
      return;
    } else {
      setEmailError(false);
    }

    if (!validateFields(fields.newPassword)) {
      setPasswordError(true);
      event.preventDefault();
      return;
    } else {
      setPasswordError(false);
    }

    if (!validateFields(fields.passwordAgain)) {
      setPasswordAgainError(true);
      event.preventDefault();
      return;
    } else {
      setPasswordAgainError(false);
    }

    if (passwordError && passwordAgainError) {
      setPasswordError(true);
      setPasswordAgainError(true);
    }

    console.log(fields);

    axios({
      method: 'put',
      url: 'http://localhost:5000/users',
      headers: {
        'x-access-token': token,
      },
      data: {
        name: fields.name,
        email: fields.email,
        password: fields.newPassword,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className={styles.modal}>
      <p className={styles.title}>Configurar minha conta</p>
      <form onSubmit={handleConfirm}>
        {/* <div className={styles.header}>
          <div className={styles.avatar}></div>
          <input className={styles.link} type="file" id="myfile" name="myfile" />
        </div> */}
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            name="name"
            value={fields.name}
            className="form-control"
            id="floatingInput"
            placeholder="Nome"
            onChange={handleChange}
            required
          />
        </div>
        {nameError && <span className={styles.error}>Nome mínimo 2 letras</span>}
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
        </div>
        {emailError && <span className={styles.error}>Email inválido</span>}
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            name="newPassword"
            value={fields.newPassword}
            className="form-control"
            id="floatingInput"
            placeholder="Nova senha"
            onChange={handleChange}
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            name="passwordAgain"
            value={fields.passwordAgain}
            className="form-control"
            id="floatingInput"
            placeholder="Redigite senha"
            onChange={handleChange}
            required
          />
        </div>
        {passwordError && (
          <span className={styles.error}>Senha mínimo 6 caracteres (números e letras)</span>
        )}
        {passwordError && passwordAgainError && <span className={styles.error}>/ </span>}
        {passwordAgainError && <span className={styles.error}>Senhas não coincidem</span>}
        <div className={styles.buttons}>
          <button type="submit" className={styles.button_save}>
            Salvar alteração
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsModal;
