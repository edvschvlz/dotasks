import React from 'react';

import styles from './Task.module.css';

const Task = ({ name, importance }) => {
  return (
    <div className={styles.task}>
      <span>{name}</span>
      <span className={`${styles.importance} ${styles[importance.toLowerCase()]}`}></span>
    </div>
  );
};

export default Task;
