import Logo from '../../assets/img/logo.svg';
import LoginCard from './LoginCard';
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={styles.login}>
      <img src={Logo} alt="logo" className={styles.image} />
      <LoginCard />
    </div>
  );
};

export default Login;
