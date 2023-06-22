import styles from './NewProjectModal.css';

const NewProjectModal = () => {
  return (
    <div className='modal-card'>
      <h5>Nome da tarefa</h5>
      <p>Nome da Coluna</p>

      <div id='desc-block'>
        <div id='desc-title'>
          <i class="bi bi-list"></i>
          <p>Descrição</p>
          <button type='button' className='edit-button'>Editar</button>
          DEIXAR A NAVBAR FIXA
        </div>
      </div>
      
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
