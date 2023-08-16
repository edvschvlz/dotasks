import { useState } from 'react';
import styles from './ImportanceModal.module.css';
import { useAuth } from '../../../../../contexts/Auth';
import axios from 'axios';

const ImportanceModal = ({ id, setShowModal }) => {
  const [importance, setImportance] = useState('');
  const { token } = useAuth();

  const handleConfirm = () => {
    axios({
      method: 'put',
      url: `http://localhost:5000/tasks/${id}`,
      headers: {
        'x-access-token': token,
      },
      data: {
        importance: importance,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  return (
    <div className={styles.card}>
      <p className={styles.title}>Redefina</p>
      <form onSubmit={handleConfirm}>
        <div className={styles.container_importance}>
          <label for="importance" className={styles.label_importance}>
            Prioridade:
          </label>
          <select
            name="importance"
            id="importance"
            onChange={(event) => setImportance(event.target.value)}
            value={importance}
          >
            <option>Escolha</option>
            <option value="GREEN" style={{ backgroundColor: 'var(--verde)' }}>
              Baixa
            </option>
            <option value="YELLOW" style={{ backgroundColor: 'var(--amarelo)' }}>
              Média
            </option>
            <option value="RED" style={{ backgroundColor: 'var(--vermelho)' }}>
              Alta
            </option>
          </select>
        </div>
        <button type="submit" className={styles.button_save}>
          Salvar
        </button>
      </form>
    </div>
  );
};

export default ImportanceModal;
