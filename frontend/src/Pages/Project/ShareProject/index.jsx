import { GrClose } from 'react-icons/gr';
import styles from './ShareProject.module.css';

const ShareProject = () => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Compartilhar “Nome Projeto”</p>
      <div className={styles.container}>
        <form>
          <div className={`mb-3 container-input`}>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email do colaborador"
              required
            />
            <div className={styles.container_checkbox}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className={styles.checkbox_label} for="flexCheckDefault">
                  Administrador
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className={styles.button_share}>
                Compartilhar
              </button>
              <GrClose className={styles.close} />
            </div>
          </div>
        </form>
      </div>
      <div className={styles.container_names}>
        <div>
          <p className={styles.title}>Administradores:</p>
          <p>Mikey Mouse, Paula Pavarotti, Irmão do Jorel, Elefante Amarelo</p>
        </div>
        <div>
          <p className={styles.title}>Visualizadores:</p>
          <p>
            Luiz Messias, Paula Pavarotti, Pepa Pig, Astolfo, Gesorel Mestre dos Disfarces, Eliana
            Apresentadora
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShareProject;
