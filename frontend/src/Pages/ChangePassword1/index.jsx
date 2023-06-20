import Logo from '../../assets/img/logo.svg';
import ChangePasswordCard from '../../Components/Card/ChangePasswordCard';
import './ChangePassword1.css';

const ChangePassword1 = () => {
  return (
    <div className="change-password">
      <img src={Logo} alt="logo" />
      <ChangePasswordCard />
    </div>
  );
};

export default ChangePassword1;
