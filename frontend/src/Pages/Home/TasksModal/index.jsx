import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './TasksModal.module.css';

const TasksModal = () => {
  const [tasks, setTasks] = useState([]);
  const [tasksCard, setTasksCard] = useState([]);
  const [dropdown, setDropdown] = useState('');
  const text = useRef('');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/tasks',
      responseType: 'json',
    })
      .then((response) => {
        const tasks = response.data;
        
        setTasks(tasks);
        setTasksCard(tasks);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.modalcard}>
      <div className={styles.buttons_card}>
        <button type="button" className={styles.button_exclude}>
          Excluir
        </button>
        <button type="button" className={styles.button_exit}>
          Sair
        </button>
        <button type="button" className={styles.button_editors}>
          Editores
        </button>

        <div className={styles.button_date}>
          <p>Prazo :</p>
          <input className={styles.date} type="date" />
        </div>
      </div>

      <div className={styles.first_card}>
        <h5 className={styles.titulos}>Nome da tarefa</h5>
        <p className={styles.titulo_second}>Nome da Coluna</p>

        <div className={styles.descblock}>
          <div className={styles.desctitle}>
            <i class="bi bi-list"></i>
            <p className={styles.descricaotitle}>Descrição</p>
            <button type="button" className={styles.editbutton}>
              Editar
            </button>
          </div>
          <p className={styles.descricao}>Oi! Aqui está uma descrição bem bonita S2</p>
        </div>

        <div className={styles.ativblock}>
          <p className={styles.descricaotitle}>Atividades</p>
          <div className={styles.listblock}>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              ></input>
              <label class="form-check-label" for="flexCheckDefault">
                Pesquisar grupos de atividades que façam adoleta vendados
              </label>
            </div>
          </div>
        </div>

        <form className={styles.form_item}>
          <div className={`mb-3 container-input`}>
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nome da Atividade"
              required
            />
          </div>
          <div className={styles.buttons_lc}>
            <button type="submit" className={styles.button_login}>
              Incluir Atividade
            </button>
            <button type="button" className={styles.button_close}>
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TasksModal;
