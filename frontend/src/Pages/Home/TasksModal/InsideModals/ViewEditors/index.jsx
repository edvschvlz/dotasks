import styles from './ViewEditors.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ViewEditors = () => {
  const [task, setTask] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/tasks/getTaskEditors/1`,
      responseType: 'json',
    })
      .then((response) => {
        const users = response.data[0];

        console.log(users)

        setTask(users);
      })
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className={styles.modalcard}>
      <p className={styles.editor}>Editores:</p>
      <p className={styles.descricao}>{task.name}</p>
      <form className={styles.form_item}>
        <div >
          <input   id="floatingInput" className="form-desc-textarea" name="story"
            value="usuario@email.com"> 
          </input>
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.button_save}>
            Convidar Editor
          </button>
        </div>
      </form>
    </div>
  );
};

export default ViewEditors;
