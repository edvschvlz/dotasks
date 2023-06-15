import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/user.png'
import './Navbar.css';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-brand" to='/'>
                    <Link to={"/home"}><img id="logo" src={logo} alt="dotasks"/></Link>                    
                </div>
                
                <div id="bell" to='/'>
                    <i class="bi bi-bell-fill"></i>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img id="user" src={user} alt="usuario"/>
                                </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li className="dropdown-item"><Link to={"/home"}></Link>Home</li>
                                <li className="dropdown-item"><Link to={"/home"}></Link>Configurações</li>
                                <li className="dropdown-item"><Link to={"/home"}></Link>Sair</li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    
    )
}

export default Navbar;