import SettingsModal from '../../Components/SettingsModal';
import styles from './AccountSettings.module.css';

const AccountSettings = () => {
  return (
    <div className={styles.account_settings}>
      <SettingsModal />
    </div>
  );
};

export default AccountSettings;
