import styles from './EditDescriptionTask.module.css';

const EditDescriptionTask = ({activity}) => {
  return (
    <div className={styles.modalcard}>
      <p className={styles.descricaotitle}>Descrição</p>
      <form className={styles.form_item}>
        <div >
          <textarea   id="floatingInput" className="form-desc-textarea" name="story"
            rows="5" cols="33" value={activity.activity_description} > 
          </textarea>
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
