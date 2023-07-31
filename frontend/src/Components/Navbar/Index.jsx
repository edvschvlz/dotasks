import { Link, useNavigate } from 'react-router-dom';
import logoNav from '../../assets/img/logo.svg';
import user from '../../assets/img/user.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Modal from '../Modal';
import SettingsModal from '../../Pages/Home/SettingsModal';
import { useAuth } from '../../contexts/Auth';

function Navbar({ type }) {
  const setType = type;
  const [showModal, setShowModal] = useState(false);
  const { Logout } = useAuth();
  const navigate = useNavigate();

  const settings = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    Logout();
    navigate('/');
  };

  return (
    <div className={styles.nav}>
      <div className={styles.logo_container}>
        <img src={logoNav} alt="dotasks" />
      </div>

      <div className={styles.user_bell_container}>
        {setType && (
          <div className={styles.button_ch}>
            <button type="button">Sair</button>
            <button type="button">Compartilhar</button>
          </div>
        )}

        <i className="bi bi-bell-fill"></i>

        <div className="dropdown">
          <div
            className={styles.user_container}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={user} alt="usuario" />
          </div>

          <Modal show={showModal} setShowModal={setShowModal}>
            {showModal && <SettingsModal show={showModal} setShowModal={setShowModal} />}
          </Modal>

          <ul className="dropdown-menu dropdown-menu-end">
            <li className="dropdown-item">
              <Link to={'/home'} />
              Home
            </li>
            <li className="dropdown-item" onClick={settings}>
              Configurações
            </li>
            <li className="dropdown-item" onClick={handleLogout}>
              Sair
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
