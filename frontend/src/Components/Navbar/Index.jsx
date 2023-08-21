import { Link, useNavigate, useParams } from 'react-router-dom';
import logoNav from '../../assets/img/logo.svg';
import userpng from '../../assets/img/user.png';
import styles from './Navbar.module.css';
import { useState } from 'react';
import Modal from '../Modal';
import SettingsModal from '../../Pages/Home/SettingsModal';
import { useAuth } from '../../contexts/Auth';
import ShareProject from '../../Pages/Project/ShareProject';
import axios from 'axios';

function Navbar({ type }) {
  const setType = type;
  const [showModal, setShowModal] = useState(false);
  const [showModalShare, setShowModalShare] = useState(false);
  const { user, Logout, token } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const settings = () => {
    setShowModal(true);
  };

  const share = () => {
    setShowModalShare(true);
  };

  const handleLogout = () => {
    Logout();
    navigate('/');
  };

  const exitProject = () => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/users_has_projects?project_id=${id}&user_id=${
        JSON.parse(user).id
      }`,
      headers: {
        'x-access-token': token,
      },
    })
      .then(() => {
        navigate('/home');
      })
      .catch(() => {
        return false;
      });
  };

  return (
    <div className={styles.nav}>
      <div className={styles.logo_container}>
        <img src={logoNav} alt="dotasks" />
      </div>

      <div className={styles.user_bell_container}>
        {setType && (
          <div className={styles.button_ch}>
            <button type="button" onClick={exitProject}>
              Sair
            </button>
            <button type="button" onClick={share}>
              Compartilhar
            </button>
          </div>
        )}

        <Modal show={showModalShare} setShowModal={setShowModalShare}>
          <ShareProject show={showModalShare} setShowModal={setShowModalShare} />
        </Modal>

        <div className="dropdown">
          <div
            className={styles.user_container}
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={userpng} alt="usuario" />
          </div>

          <Modal show={showModal} setShowModal={setShowModal}>
            <SettingsModal show={showModal} setShowModal={setShowModal} />
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
