import { GrClose } from 'react-icons/gr';
import { FaUserCircle } from 'react-icons/fa';
import styles from './EditorsModal.module.css';

const EditorsModal = () => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <FaUserCircle size={20} />
        <p>Editores</p>
      </div>
      <div className={styles.container}>
        <div className={`mb-3 container-input`}>
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email do colaborador"
            required
          />
          <div>
            <button type="submit" className={styles.button_invite}>
              Convidar novo editor
            </button>
            <GrClose className={styles.close} />
          </div>
        </div>
      </div>
      <div className={styles.names}>
        <p>
          Luiz Messias, Mikey Mouse, Paula Pavarotti, Irmão do Jorel, Pepa Pig, Elefante Amarelo
        </p>
      </div>
    </div>
  );
};

export default EditorsModal;
