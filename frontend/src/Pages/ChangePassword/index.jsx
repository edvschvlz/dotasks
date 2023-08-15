import Logo from '../../assets/img/logo.svg';
import SendMail from './SendMail';
import ResetPassword from './ResetPassword';
import ConfirmationCode from './ConfirmationCode';
import styles from './ChangePassword.module.css';
import { useState } from 'react';

const ChangePassword = () => {
  const [type, setType] = useState(1);
  const [userEmail, setUserEmail] = useState('');

  return (
    <div className={styles.change_password}>
      <img src={Logo} alt="logo" />
      {type === 1 ? (
        <SendMail setType={setType} setUserEmail={setUserEmail} />
      ) : type === 2 ? (
        <ConfirmationCode setType={setType} userEmail={userEmail} />
      ) : (
        <ResetPassword userEmail={userEmail} />
      )}
    </div>
  );
};

export default ChangePassword;
