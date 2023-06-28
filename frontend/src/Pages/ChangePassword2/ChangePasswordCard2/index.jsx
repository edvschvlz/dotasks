import styles from './ChangePasswordCard2.module.css';

const ChangePasswordCard2 = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefinir senha</p>
      <p className={styles.text}>Digite a nova senha</p>
      <form>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            className="form-control"
            id="floatingPassword"
            placeholder="Senha novamente"
            required
          />
        </div>
        <button type="submit" className={styles.button_send}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordCard2;
