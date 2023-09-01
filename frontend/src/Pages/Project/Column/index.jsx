import React, { useState } from 'react';
import styles from './Column.module.css';
import Task from './Task';
import Modal from '../../../Components/Modal';
import NewTaskModal from '../Column/NewTaskModal';
import { BiTrash, BiPencil } from 'react-icons/bi';
import DeleteColumnModal from './DeleteColumnModal';
import EditColumnModal from './EditColumnModal';

//COMPONENTE COM DUAS FUNÇÕES PODENDO SER PARA CRIAÇÃO
//DE UMA NOVA COLUNA OU JÁ PARA ADIÇÃO DE TAREFAS

const Column = ({ column, id, name }) => {
  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [nameColumn, setNameColumn] = useState(name);

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        <h1>{nameColumn}</h1>
        <div className={styles.icons}>
          <BiPencil size={20} className={styles.icon} onClick={() => setShowEdit(true)} />
          <BiTrash size={20} className={styles.icon} onClick={() => setShowDelete(true)} />
        </div>
      </div>
      <Modal show={showEdit} setShowModal={setShowEdit}>
        <EditColumnModal id={id} name={name} setShowEdit={setShowEdit} />
      </Modal>
      <Modal show={showDelete} setShowModal={setShowDelete}>
        <DeleteColumnModal id={id} setShowDelete={setShowDelete} />
      </Modal>
      <div className={styles.tasks}>
        {column.tasks &&
          column.tasks.map((task) => (
            <Task id={task.task_id} name={task.task_name} importance={task.task_importance} />
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
