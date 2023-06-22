import SettingsModal from '../../Components/Modal/SettingsModal';
import ShareProject from '../../Components/Modal/ShareProject';
import styles from './PageTest.module.css';

const PageTest = () => {
  return (
    <div className={styles.test}>
      <ShareProject />
    </div>
  );
};

export default PageTest;
