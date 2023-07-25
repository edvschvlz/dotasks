import RegisterCard from './RegisterCard';
import Logo from '../../assets/img/logo.svg';
import styles from './Register.module.css';

const Register = () => {
  return (
    <div className={styles.register}>
      <img src={Logo} alt="logo" />
      <RegisterCard />
    </div>
  );
};

export default Register;
