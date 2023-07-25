import styles from './SettingsModal.module.css';

const SettingsModal = () => {
  return (
    <div className={styles.modal}>
      <p className={styles.title}>Configurar minha conta</p>
      <div className={styles.avatar}></div>
      <a href="#" className={styles.link}>
        Alterar foto de perfil
      </a>
      <form>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="Senha atual"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="Nova senha"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="password"
            className="form-control"
            id="floatingInput"
            placeholder="Redigite senha"
            required
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button_save}>
            Salvar alteração
          </button>
          <button type="submit" className={styles.button_cancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingsModal;
