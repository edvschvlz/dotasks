import React, { useState } from 'react';
import styles from './Task.module.css';
import Modal from '../../../../Components/Modal';
import ImportanceModal from './ImportanceModal';

const Task = ({ id, name, importance }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.task}>
      <span>{name}</span>
      <span
        className={`${styles.importance} ${styles[importance.toLowerCase()]}`}
        onClick={() => setShowModal(true)}
      ></span>
      <Modal show={showModal} setShowModal={setShowModal}>
        <ImportanceModal id={id} setShowModal={setShowModal} />
      </Modal>
    </div>
  );
};

export default Task;
