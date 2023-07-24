import styles from './NewProjectModal.module.css';

const NewProjectModal = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Novo Projeto</p>
      <form>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Nome do Projeto"
            required
          />
        </div>
        <div className={`mb-3 container-input`}>
          <textarea
            type="text"
            className="form-control"
            id="descricao"
            placeholder="Descrição"
            rows={5}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button_login}>
          Salvar
        </button>
        <button type="button" className={styles.button_close}>
          <i class="bi bi-x-lg"></i>
        </button>
      </form>
    </div>
  );
};

export default NewProjectModal;
