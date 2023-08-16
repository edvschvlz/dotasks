import React, { useState } from 'react';
import styles from './Column.module.css';
import Task from './Task';
import Modal from '../../../Components/Modal';
import NewTaskModal from '../Column/NewTaskModal';
import { BiTrash, BiSave } from 'react-icons/bi';
import DeleteColumnModal from './DeleteColumnModal';

//COMPONENTE COM DUAS FUNÇÕES PODENDO SER PARA CRIAÇÃO
//DE UMA NOVA COLUNA OU JÁ PARA ADIÇÃO DE TAREFAS

const Column = ({ column, id, name }) => {
  const [showModal, setShowModal] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [nameColumn, setNameColumn] = useState(name);
  const [editName, setEditName] = useState(false);

  return (
    <div className={styles.column}>
      <div className={styles.header}>
        {!editName && <h1 onClick={() => setEditName(true)}>{nameColumn}</h1>}
        {editName && (
          <div className={styles.edit}>
            <input type="text" value={nameColumn} />
            <BiSave size={20} />
          </div>
        )}
        <BiTrash size={20} className={styles.icon} onClick={() => setShowDelete(true)} />
      </div>
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
