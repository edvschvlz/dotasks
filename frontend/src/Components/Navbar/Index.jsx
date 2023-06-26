import { Link } from 'react-router-dom';
import logoNav from '../../assets/img/logo.svg';
import user from '../../assets/img/user.png';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.barra_nav}>
        <div className={styles.logo_container}>
          <Link to={'/home'}>
            <img id={styles.logo} src={logoNav} alt="dotasks" />
          </Link>
        </div>

        <div className={styles.user_bell_container}>
          <div className={styles.button_ch}>
            <button type="button" className={styles.btn_sair}>
              Sair
            </button>
            <button type="button" className={styles.btn_comp}>
              Compartilhar
            </button>
          </div>

          <div className={styles.bell}>
            <i className="bi bi-bell-fill"></i>
          </div>

          <li className={`styles.nav_item styles.dropdown`}>
            <a
              className={styles.user_container}
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img className={styles.user} src={user} alt="usuario" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li className="dropdown-item">
                <Link to={'/home'}></Link>Home
              </li>
              <li className="dropdown-item">
                <Link to={'/home'}></Link>Configurações
              </li>
              <li className="dropdown-item">
                <Link to={'/home'}></Link>Sair
              </li>
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
