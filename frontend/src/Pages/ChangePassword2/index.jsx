import Logo from '../../assets/img/logo.svg';
import ChangePasswordCard2 from './ChangePasswordCard2';
import styles from './ChangePassword2.module.css';

const ChangePassword2 = () => {
  return (
    <div className={styles.change_password}>
      <img src={Logo} alt="logo" />
      <ChangePasswordCard2 />
    </div>
  );
};

export default ChangePassword2;
