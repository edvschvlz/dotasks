import NavbarProjetos from '../../Components/NavbarProjetos/Index';
import styles from './Project.module.css';
import { GrClose } from 'react-icons/gr';

const Project = () => {
  return (
    <>
      <NavbarProjetos />
      <div className={styles.container}>
        <div className={styles.column}>
          <h1>Título Coluna</h1>
          <div className={styles.tasks}>
            <div className={styles.task}>
              <span>Nome Tarefa A</span>
              <span className={styles.importance_green}></span>
            </div>
            <div className={styles.task}>
              <span>Nome Tarefa B</span>
              <span className={styles.importance_green}></span>
            </div>
            <div className={styles.create}>
              <div className={styles.title_importance}>
                <input
                  type="text"
                  id="input-task"
                  className="form-control"
                  placeholder="Insira o nome da tarefa..."
                  required
                />
                <span className={styles.importance_green}></span>
              </div>
              <div className={styles.buttons}>
                <button type="submit">Adicionar tarefa</button>
                <GrClose className={styles.close} />
              </div>
            </div>
            <div className={styles.add_task}>
              <span>+ NOVA TAREFA</span>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <h1>Título Coluna</h1>
          <div className={styles.tasks}>
            <div className={styles.task}>
              <span>Nome Tarefa A</span>
              <span className={styles.importance_red}></span>
            </div>
            <div className={styles.task}>
              <span>Nome Tarefa B</span>
              <span className={styles.importance_red}></span>
            </div>
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.create}>
            <input
              type="text"
              id="input-task"
              className="form-control"
              placeholder="Insira o título da coluna..."
              required
            />
            <div className={styles.buttons}>
              <button type="submit">Adicionar coluna</button>
              <GrClose className={styles.close} />
            </div>
          </div>
        </div>
        <div className={styles.add_column}>
          <span>+ NOVA COLUNA</span>
        </div>
      </div>
    </>
  );
};

export default Project;
