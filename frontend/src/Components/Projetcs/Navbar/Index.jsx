import { Link } from 'react-router-dom';
import logoNav from '../../assets/img/logo.svg'
import user from '../../assets/img/user.png'
import './Navbar.css';

function Navbar(){
    return (
        <div className='nav'>
            <div className="barra-nav">
                <div className='logo-container'>
                    <Link to={"/home"}><img id="logo" src={logoNav} alt="dotasks"/></Link>  
                </div>
                
                <div className='user-bell-conteiner'>
                    <div className="bell">
                        <i className="bi bi-bell-fill"></i>
                    </div>

                    <li className="nav-item dropdown">
                        <a className="user-conteiner" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img className="user" src={user} alt="usuario"/>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li className="dropdown-item"><Link to={"/home"}></Link>Home</li>
                            <li className="dropdown-item"><Link to={"/home"}></Link>Configurações</li>
                            <li className="dropdown-item"><Link to={"/home"}></Link>Sair</li>
                        </ul>
                    </li>
                </div>                
            </div> 
        </div>
    )
}

export default Navbar;