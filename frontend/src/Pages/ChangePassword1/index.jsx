import Logo from '../../assets/img/logo.svg';
import ChangePasswordCard1 from './ChangePasswordCard1';
import styles from './ChangePassword1.module.css';

const ChangePassword1 = () => {
  return (
    <div className={styles.change_password}>
      <img src={Logo} alt="logo" />
      <ChangePasswordCard1 />
    </div>
  );
};

export default ChangePassword1;
