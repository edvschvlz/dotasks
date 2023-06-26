import React from 'react';

import styles from './Task.module.css';

const Task = ({ name, importance }) => {
  return (
    <div className={styles.task}>
      <span>Nome Tarefa A</span>
      <span className={`${styles.importance} ${styles.green}`}></span>
    </div>
  );
};

export default Task;
