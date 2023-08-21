import { useState } from 'react';
import { useAuth } from '../../../../contexts/Auth';
import styles from './EditColumnModal.module.css';
import axios from 'axios';

const EditColumnModal = ({ id, name, setShowEdit }) => {
  const [columnTitle, setColumnTitle] = useState(name);
  const { token } = useAuth();

  const handleSubmit = () => {
    axios({
      method: 'put',
      url: `http://localhost:5000/columns/${id}`,
      headers: {
        'x-access-token': token,
      },
      data: {
        name: columnTitle,
      },
    }).then(() => {
      setShowEdit(false);
    });
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Editar nome da coluna</p>
      <form onSubmit={handleSubmit}>
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

export default EditColumnModal;
