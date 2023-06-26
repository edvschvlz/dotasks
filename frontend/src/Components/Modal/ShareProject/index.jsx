import styles from './ShareProject.module.css';

// ESSE COMPONENTE AINDA ESTÁ EM DESENVOLVIMENTO

const ShareProject = () => {
  return (
    <div className={styles.card}>
      <p>Compartilhar “Nome Projeto”</p>
      <div className={styles.container}>
        <form>
          <div className={`mb-3 container-input`}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email do colaborador"
              required
            />
            <div className={styles.container_checkbox}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className={styles.checkbox_label} for="flexCheckDefault">
                  Administrador
                </label>
              </div>
              <button type="submit" className={styles.button_save}>
                Salvar alteração
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShareProject;
