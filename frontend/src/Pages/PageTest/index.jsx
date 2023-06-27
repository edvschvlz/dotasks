import ShareProject from '../Project/ShareProject';
import EditorsModal from '../../Components/Navbar/EditorsModal';
import SettingsModal from '../Home/SettingsModal';
import styles from './PageTest.module.css';

const PageTest = () => {
  return (
    <div className={styles.test}>
      <SettingsModal />
    </div>
  );
};

export default PageTest;
