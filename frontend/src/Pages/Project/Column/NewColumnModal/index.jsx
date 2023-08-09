import styles from './NewColumnModal.module.css';
import { useEffect, useState } from 'react';

const NewTaskModal = ({ setShowModal }) => {
  const [columnTitle, setColumnTitle] = useState('');

  useEffect(() => {
    setColumnTitle('');
  }, []);

  const handleConfirm = () => {
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:5000/columns',
    //   headers: {
    //     'x-access-token': token,
    //   },
    //   data: {
    //     name: columnTitle,
    //     columns_id: '',
    //   },
    // }).then(() => {
    //   setShowModal(false);
    // });
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
