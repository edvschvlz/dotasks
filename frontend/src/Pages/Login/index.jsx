import './Login.css';
import Logo from '../../assets/img/logo.svg';
import LoginCard from '../../Components/Card/LoginCard';

const Login = () => {
  return (
    <div className="login">
      <img src={Logo} alt="logo" />
      <LoginCard />
    </div>
  );
};

export default Login;
