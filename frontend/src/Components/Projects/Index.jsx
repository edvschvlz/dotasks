import styles from './Projects.module.css';

function Projects() {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.text_home}>Seus Projetos</div>
        <div className={styles.search_button}>
          <button type="button" className={styles.btn_newhome}>
            Novo Projeto
          </button>
          <div className={styles.form_search}>
            <form>
              <input className={styles.form_control_search} type="text" placeholder="Pesquisa"></input>
              <i className="bi bi-search" type="submit"></i>
            </form>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        <div className={styles.project_card}>PROJETO</div>
      </div>
    </div>
  );
}

export default Projects;
