import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './TasksModal.module.css';
import Modal from '../../../Components/Modal';
import EditDescriptionTask from './InsideModals/EditDescriptionTask';
import ViewEditors from './InsideModals/ViewEditors';
import { useAuth } from '../../../contexts/Auth';

const TasksModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [showModalView, setShowModalView] = useState(false)
  const { token } = useAuth();
  const [task, setTask] = useState({});
  const text = useRef('');

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/tasks/1`,
      responseType: 'json',
      headers: { 
        Authorization: token, 
      }
    })
      .then((response) => {
        const taskdata = response.data[0];

        setTask(taskdata);
      })
      .catch((err) => console.log(err));
  },
   []);

  const viewEditors = () => {
    setShowModalView(true)
  }

  const editDescriptionTask = () => {
    setShowModal(true)
  }

  return (
    <div className={styles.modalcard}>
      <div className={styles.buttons_card}>
        <button type="button" onClick={viewEditors} className={styles.button_editors}>
          Editores
        </button>
        <Modal show={showModalView} setShowModal={setShowModalView}>
              <ViewEditors />
        </Modal>

        <div className={styles.button_date}>
          <p>Prazo :</p>
          <input className={styles.date} type="date" />
        </div>
        <button type="button" className={styles.button_exclude}>
          Excluir
        </button>
  

      </div>

      <div className={styles.first_card}>
        <h5 className={styles.titulos}>{task.name}</h5>
        <p className={styles.titulo_second}>Nome da Coluna</p>

        <div className={styles.descblock}>
          <div className={styles.desctitle}>
            <i class="bi bi-list"></i>
            <p className={styles.descricaotitle}>Descrição</p>
            <button type="button" onClick={editDescriptionTask} className={styles.editbutton}>
              Editar
            </button>
            <Modal show={showModal} setShowModal={setShowModal}>
              <EditDescriptionTask />
            </Modal>

          </div>
          <p className={styles.descricao}>{task.description}</p>
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
