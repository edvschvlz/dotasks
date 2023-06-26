import Column from './Column';

import styles from './Project.module.css';

const Project = () => {
  return (
    <>
      <div className={styles.container}>
        <Column />
        <div className={styles.add_column}>
          <span>+ NOVA COLUNA</span>
        </div>
      </div>
    </>
  );
};

export default Project;
