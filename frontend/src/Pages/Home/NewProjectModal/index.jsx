import axios from 'axios';
import styles from './NewProjectModal.module.css';
import { useAuth } from '../../../contexts/Auth';
import { useState } from 'react';

const NewProjectModal = ({ setShowModal }) => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState();
  const { token } = useAuth();

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/projects',
      headers: {
        'x-access-token': token,
      },
      data: {
        name: projectTitle,
        description: projectDescription,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Novo Projeto</p>
      <form onSubmit={handleSubmit}>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            className="form-control"
            value={projectTitle}
            id="floatingInput"
            placeholder="Nome do Projeto"
            required
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div className={`mb-3 container-input`}>
          <textarea
            type="text"
            className="form-control"
            value={projectDescription}
            id="descricao"
            placeholder="Descrição"
            rows={5}
            required
            onChange={(e) => setProjectDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className={styles.button_save}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default NewProjectModal;
