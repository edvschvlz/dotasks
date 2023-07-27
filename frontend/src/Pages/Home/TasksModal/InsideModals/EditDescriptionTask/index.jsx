import styles from './EditDescriptionTask.module.css';

const EditDescriptionTask = () => {

  return (
    <div className={styles.modalcard}>
      <p className={styles.descricaotitle}>Descrição</p>
      <form className={styles.form_item}>
        <div >
          <input
            type="textarea"
            className="form-desc-textarea"
            id="floatingInput"
            value=""
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button_save}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditDescriptionTask;
