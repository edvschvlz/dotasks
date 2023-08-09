import React, { useState } from 'react';
import styles from './Column.module.css';
import Task from './Task';
import Modal from '../../../Components/Modal';
import NewTaskModal from '../Column/NewTaskModal';

//COMPONENTE COM DUAS FUNÇÕES PODENDO SER PARA CRIAÇÃO
//DE UMA NOVA COLUNA OU JÁ PARA ADIÇÃO DE TAREFAS

const Column = ({ title }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.column}>
      <h1>Título Coluna</h1>
      <div className={styles.tasks}>
        <Task />
        <div className={styles.add_task} onClick={() => setShowModal(true)}>
          <span>+ NOVA TAREFA</span>
        </div>
        <Modal show={showModal} setShowModal={setShowModal}>
          <NewTaskModal setShowModal={setShowModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Column;
