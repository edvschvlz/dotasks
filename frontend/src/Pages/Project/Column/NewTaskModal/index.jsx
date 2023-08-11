import axios from 'axios';
import styles from './NewTaskModal.module.css';
import { useEffect, useState } from 'react';
import { useAuth } from '../../../../contexts/Auth';

const NewTaskModal = ({ column, setShowModal }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [importance, setImportance] = useState('');
  const { token } = useAuth();

  const handleConfirm = (e) => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/tasks',
      headers: {
        'x-access-token': token,
      },
      data: {
        name: taskTitle,
        importance: importance,
        columns_id: column,
      },
    }).then(() => {
      setShowModal(false);
    });
  };

  useEffect(() => {
    setTaskTitle('');
    setImportance('');
  }, []);

  return (
    <div className={styles.card}>
      <p className={styles.title}>Nova Tarefa</p>
      <form onSubmit={handleConfirm}>
        <div className={`mb-3 container-input`}>
          <input
            type="text"
            name="name"
            value={taskTitle}
            className="form-control"
            id="floatingInput"
            placeholder="Insira o nome da tarefa..."
            onChange={(event) => setTaskTitle(event.target.value)}
            required
          />
        </div>
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

export default NewTaskModal;
