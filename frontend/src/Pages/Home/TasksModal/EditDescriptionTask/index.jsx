import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './EditDescriptionTask.module.css';

const EditDescriptionTask = ({task}) => {

  const handleConfirm = (e) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      headers: {
        'x-access-token': token,
      },
      data: {
        name: taskTitle,
        importance: importance,
        columns_id: column,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className={styles.modalcard}>
      <p className={styles.descricaotitle}>Descrição</p>
      <form onSubmit={handleConfirm} className={styles.form_item}>
        <div >
          <textarea   id="floatingInput" className="form-desc-textarea" name="story"
            rows="5" cols="33" value={task.task_description} > 
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
