import ShareProject from '../Project/ShareProject';
import SettingsModal from '../Home/SettingsModal';
import EditorsModal from '../Project/EditorsModal';
import styles from './PageTest.module.css';

const PageTest = () => {
  return (
    <div className={styles.test}>
      <EditorsModal />
    </div>
  );
};

export default PageTest;
