import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TasksModal.module.css';
import Modal from '../../../Components/Modal';
import EditDescriptionTask from './EditDescriptionTask';
import { useAuth } from '../../../contexts/Auth';

const TasksModal = () => {
  const [showModal, setShowModal] = useState(false)
  const { token } = useAuth();
  const [task, setTask] = useState({});
  const [activity, setActivity] = useState({});
  const [complete, setComplete] = useState({});

  const fetchData = () => {
    axios({
      method: 'get',
      url: `http://localhost:5000/tasks/1`,
      responseType: 'json',
      headers: { 
        'x-access-token': token, 
      }
    })
    .then((response) => {
      const taskData = response.data;
      setTask(taskData);
      setActivity(taskData.activities);
    })
    .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const mudarComplete = (it) => {
    const newCompletedValue = it.activity_completed === 0 ? 1 : 0;
    
    setComplete(newCompletedValue === 1);

    axios({
      method: 'put',
      url: `http://localhost:5000/activities/${it.activity_id}`,
      headers: { 
        'x-access-token': token, 
      },
      data: {
        id: it.activity_id,
        completed: newCompletedValue,
      },
    })
    .then(() => {
      fetchData();
    })
    .catch((err) => console.log(err));
  };
  

  return (
    <div className={styles.modalcard}>
      <div className={styles.buttons_card}>

        <div className={styles.button_date}>
          <p>Prazo :</p>
          <input className={styles.date} type="date" />
        </div>
        <button type="button" className={styles.button_exclude}>
          Excluir
        </button>
        <button type="button" className={styles.button_save}>
          Salvar Alterações
        </button>

      </div>
      <div className={styles.first_card}>
        <h5 className={styles.titulos}>{task.task_name}</h5>
        <p className={styles.titulo_second}>{task.column_name}</p>

        <div className={styles.descblock}>
          <div className={styles.desctitle}>
            <i class="bi bi-list"></i>
            <p className={styles.descricaotitle}>Descrição</p>
            <button type="button" onClick={() => setShowModal(true)} className={styles.editbutton}>
              Editar
            </button>
            <Modal show={showModal} setShowModal={setShowModal}>
              <EditDescriptionTask task={task}/>
            </Modal>

          </div>
          <p className={styles.descricao}>{task.task_description}</p>
        </div>
        <div className={styles.ativblock}>
          <p className={styles.descricaotitle}>Atividades</p>
          <li className={styles.listblock}>

           {Array.isArray(activity) && activity.map((it) =>(
        
               <div class="form-check">
               <input
                 class="form-check-input"
                 type="checkbox"
                 value={it.activity_completed}
                 checked={it.activity_completed === 1}
                 onClick={() => mudarComplete(it)}
               ></input>
               <p className={it.activity_completed === 1 ? 'lista__item--completado' : 'lista__item'}>
                 {it.activity_description}
               </p>
             </div>

            ))}
          </li>
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
