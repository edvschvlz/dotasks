import Column from './Column';
import Navbar from '../../Components/Navbar';
import styles from './Project.module.css';
import { useState } from 'react';
import Modal from '../../Components/Modal';
import NewColumnModal from '../Project/Column/NewColumnModal';

const Project = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar type={true} />
      <div className={styles.container}>
        <Column />
        <div className={styles.add_column} onClick={() => setShowModal(true)}>
          <span>+ NOVA COLUNA</span>
        </div>
        <Modal show={showModal} setShowModal={setShowModal}>
          <NewColumnModal />
        </Modal>
      </div>
    </>
  );
};

export default Project;
