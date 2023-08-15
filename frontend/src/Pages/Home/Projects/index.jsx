import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import styles from './Projects.module.css';
import Modal from '../../../Components/Modal';
import NewProjectModal from '../NewProjectModal';
import { useAuth } from '../../../contexts/Auth';
import { useNavigate } from 'react-router-dom';

function Projects() {
  let projects = [];
  const [projectsCard, setProjectsCard] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { token } = useAuth();
  const navigate = useNavigate();
  const text = useRef('');

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/users_has_projects',
      headers: {
        'x-access-token': token,
      },
      responseType: 'json',
    })
      .then((response) => {
        const data = response.data;

        projects = data;
        setProjectsCard(projects);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    if (text.current.value) {
      const project = projects.find((project) => project.name === text.current.value);

      if (project) {
        return setProjectsCard(projects.filter((p) => p.name === project.name));
      }
    }
    setProjectsCard(projects);
  };

  const handleProject = (id) => {
    navigate({
      pathname: `/project/${id}`,
    });
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
          <div
            key={index}
            id={project.id}
            className={styles.project_card}
            onClick={() => handleProject(project.id)}
          >
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
