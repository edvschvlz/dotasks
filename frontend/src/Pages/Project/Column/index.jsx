import React from 'react';

import styles from './Column.module.css';

import Task from './Task';

import { GrClose } from 'react-icons/gr';

//COMPONENTE COM DUAS FUNÇÕES PODENDO SER PARA CRIAÇÃO
//DE UMA NOVA COLUNA OU JÁ PARA ADIÇÃO DE TAREFAS

const Column = ({ title }) => {
  return (
    <div className={styles.column}>
      <h1>Título Coluna</h1>
      <div className={styles.tasks}>
        <Task />
        <div className={styles.create}>
          <div className={styles.title_importance}>
            <input
              type="text"
              id="input-task"
              className="form-control"
              placeholder="Insira o nome da tarefa..."
              required
            />
            <span className={`${styles.importance} ${styles.green}`}></span>
          </div>
          <div className={styles.buttons}>
            <button type="submit">Adicionar tarefa</button>
            <GrClose className={styles.close} />
          </div>
        </div>

        {/* 
          <div className={styles.create}>
            <input
              type="text"
              id="input-task"
              className="form-control"
              placeholder="Insira o título da coluna..."
              required
            />
            <div className={styles.buttons}>
              <button type="submit">Adicionar coluna</button>
              <GrClose className={styles.close} />
            </div>
          </div>
        */}

        <div className={styles.add_task}>
          <span>+ NOVA TAREFA</span>
        </div>
      </div>
    </div>
  );
};

export default Column;
