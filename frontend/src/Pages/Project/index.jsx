import Column from './Column';
import Navbar from '../../Components/Navbar/Index';
import styles from './Project.module.css';

const Project = () => {
  return (
    <>
      <Navbar type={true} />
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
