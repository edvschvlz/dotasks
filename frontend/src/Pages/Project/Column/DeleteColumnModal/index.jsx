import axios from 'axios';
import styles from './DeleteColumnModal.module.css';
import { useAuth } from '../../../../contexts/Auth';

const DeleteColumnModal = ({ id, setShowModal }) => {
  const { token } = useAuth();

  const handleSubmit = () => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/columns/${id}`,
      headers: {
        'x-access-token': token,
      },
      responseType: 'json',
    })
      .then(() => {
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Deseja excluir esta coluna?</p>
      <form onSubmit={handleSubmit}>
        <button type="submit" className={styles.button_delete}>
          Excluir
        </button>
      </form>
    </div>
  );
};

export default DeleteColumnModal;
