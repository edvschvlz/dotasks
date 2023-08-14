import React, { useEffect, useState } from 'react';
import styles from './Column.module.css';
import Task from './Task';
import Modal from '../../../Components/Modal';
import NewTaskModal from '../Column/NewTaskModal';
import axios from 'axios';
import { useAuth } from '../../../contexts/Auth';

//COMPONENTE COM DUAS FUNÇÕES PODENDO SER PARA CRIAÇÃO
//DE UMA NOVA COLUNA OU JÁ PARA ADIÇÃO DE TAREFAS

const Column = ({ column, id, name }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.column}>
      <h1>{name}</h1>
      <div className={styles.tasks}>
        {column.tasks &&
          column.tasks.map((task) => (
            <Task name={task.task_name} importance={task.task_importance} />
          ))}
        <div className={styles.add_task} onClick={() => setShowModal(true)}>
          <span>+ NOVA TAREFA</span>
        </div>
        <Modal show={showModal} setShowModal={setShowModal}>
          <NewTaskModal column={id} setShowModal={setShowModal} />
        </Modal>
      </div>
    </div>
  );
};

export default Column;
