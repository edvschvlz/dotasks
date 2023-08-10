import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './TasksModal.module.css';
import Modal from '../../../Components/Modal';
import EditDescriptionTask from './EditDescriptionTask';
import { useAuth } from '../../../contexts/Auth';

const TasksModal = () => {
  const [showModal, setShowModal] = useState(false)
  const { token } = useAuth();
  const [project, setProject] = useState({});
  const [column, setColumn] = useState({});
  const [task, setTask] = useState({});
  const [activity, setActivity] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/projects/1`,
      responseType: 'json',
      headers: { 
        'x-access-token': token, 
      }
    })
      .then((response) => {
        console.log("data: ",response.data);
      
        const projectdata = response.data;
        const columndata =  projectdata.columns;
        const taskdata =  projectdata.columns[0].tasks;
        const activitiesdata =  projectdata.columns[0].tasks[0].activities;
        
        setProject(projectdata);
        setColumn(columndata);
        setTask(taskdata);
        setActivity(activitiesdata);

      })
      .catch((err) => console.log(err));
  }, []);

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

      </div>
      <div className={styles.first_card}>
        <h5 className={styles.titulos}>{project && project.columns[0].tasks[0].task_name}</h5>
        <p className={styles.titulo_second}>{column.column_name}</p>

        <div className={styles.descblock}>
          <div className={styles.desctitle}>
            <i class="bi bi-list"></i>
            <p className={styles.descricaotitle}>Descrição</p>
            <button type="button" onClick={() => setShowModal(true)} className={styles.editbutton}>
              Editar
            </button>
            <Modal show={showModal} setShowModal={setShowModal}>
              <EditDescriptionTask activity={activity}/>
            </Modal>

          </div>
          <p className={styles.descricao}>{project.columns[0].tasks[0].task_description}</p>
        </div>
        <div className={styles.ativblock}>
          <p className={styles.descricaotitle}>Atividades</p>
          <div className={styles.listblock}>

           {Array.isArray(activity) && activity.map((it) =>(

               <div class="form-check">
               <input
                 class="form-check-input"
                 type="checkbox"
                 value={it.activity_completed}
                 id="flexCheckDefault"
               ></input>
               <label class="form-check-label" for="flexCheckDefault">
                 {it.activity_description}
               </label>
             </div>
            ))}
           


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
