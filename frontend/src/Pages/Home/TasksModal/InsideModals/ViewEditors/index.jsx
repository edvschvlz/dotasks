import styles from './ViewEditors.module.css';

const ViewEditors = () => {

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
        <div className={styles.buttons_lc}>
          <button type="submit" className={styles.button_login}>
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ViewEditors;
