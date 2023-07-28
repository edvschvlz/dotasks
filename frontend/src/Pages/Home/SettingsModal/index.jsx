import { useEffect, useState } from 'react';
import styles from './SettingsModal.module.css';

const SettingsModal = ({ showModal, setShowModal }) => {
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordAgainError, setPasswordAgainError] = useState(false);

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
    // setFields({ ...fields, [event.target.name]: event.target.value });
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'currentPassword') {
      setCurrentPassword(event.target.value);
    }
    if (event.target.name === 'newPassword') {
      setNewPassword(event.target.value);
    }
    if (event.target.name === 'passwordAgain') {
      setPasswordAgain(event.target.value);
    }
  };

  console.log(name, currentPassword, newPassword, passwordAgain);

  const handleConfirm = (event) => {
    validateFields(newPassword, passwordAgain);
    event.preventDefault();

    console.log('passwordError', passwordError);
    console.log('passwordAgainError', passwordAgainError);

    setShowModal(false);
  };

  return (
    <div className={styles.modal}>
      <p className={styles.title}>Configurar minha conta</p>
      <form onSubmit={handleConfirm}>
        <div className={styles.header}>
          <div className={styles.avatar}></div>
          <input className={styles.link} type="file" id="myfile" name="myfile" />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control"
            id="floatingInput"
            placeholder="Nome"
            onChange={handleChange}
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            name="currentPassword"
            value={currentPassword}
            className="form-control"
            id="floatingInput"
            placeholder="Senha atual"
            onChange={handleChange}
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            name="newPassword"
            value={newPassword}
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
            value={passwordAgain}
            className="form-control"
            id="floatingInput"
            placeholder="Redigite senha"
            onChange={handleChange}
            required
          />
        </div>
        {passwordError && <span className={styles.error}>Senha inválida</span>}
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
