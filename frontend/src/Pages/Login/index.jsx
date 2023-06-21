import Logo from '../../assets/img/logo.svg';
import LoginCard from '../../Components/Card/LoginCard';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={Logo} alt="logo" />
      <LoginCard />
    </div>
  );
};

export default Login;
