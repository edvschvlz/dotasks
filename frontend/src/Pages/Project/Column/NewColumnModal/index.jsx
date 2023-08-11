import axios from 'axios';
import styles from './NewColumnModal.module.css';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/Auth';
import { useParams } from 'react-router-dom';

const NewTaskModal = ({ setShowModal }) => {
  const [columnTitle, setColumnTitle] = useState('');
  const [project, setProject] = useState();
  const { token } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    setColumnTitle('');
  }, []);

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:5000/projects/${id}`,
      responseType: 'json',
      headers: {
        'x-access-token': token,
      },
    })
      .then((response) => {
        setProject(response.data.project_id);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleConfirm = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/columns',
      headers: {
        'x-access-token': token,
      },
      data: {
        name: columnTitle,
        projects_id: project,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Nova Coluna</p>
      <form onSubmit={handleConfirm}>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            name="name"
            value={columnTitle}
            className="form-control"
            id="floatingInput"
            placeholder="Insira o nome da coluna..."
            onChange={(event) => setColumnTitle(event.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.button_save}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewTaskModal;
