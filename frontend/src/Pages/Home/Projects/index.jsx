import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';
import Modal from '../../../Components/Modal';
import NewProjectModal from '../NewProjectModal';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [projectsCard, setProjectsCard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const text = useRef('');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/projects',
      responseType: 'json',
    })
      .then((response) => {
        const projects = response.data;

        setProjects(projects);
        setProjectsCard(projects);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    if (text.current.value) {
      const project = projects.find((project) => project.name === text.current.value);

      if (project) {
        return setProjectsCard(projects.filter((p) => p.name === project.name));
      } else {
        return setProjectsCard([]);
      }
    }
    return setProjectsCard(projects);
  };

  const newProject = () => {
    setShowModal(true);
  };

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <div className={styles.text_home}>Seus Projetos</div>
        <div className={styles.search_button}>
          <Modal show={showModal} setShowModal={setShowModal}>
            <NewProjectModal />
          </Modal>

          <button className={styles.btn_newhome} onClick={newProject}>
            Novo Projeto
          </button>

          <div className={styles.form_search}>
            <input
              className={styles.form_control_search}
              type="text"
              placeholder="Pesquisa"
              defaultValue=""
              ref={text}
            />
            <i className="bi bi-search" onClick={handleSubmit} type="button"></i>
          </div>
        </div>
      </div>

      <div className={styles.project}>
        {projectsCard.map((project, index) => (
          <div key={index} className={styles.project_card}>
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
