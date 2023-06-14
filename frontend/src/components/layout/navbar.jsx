import logo from '../img/logo.svg'
import sino from '../img/sino.png'
import './navbar.css';

function Navbar(){
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="navbar-brand" to='/'>
                    <img id="logo" src={logo} alt="dotasks"/>
                </div>
                
                <div class="navbar-bell" to='/'>
                    <img id="bell" src={sino} alt="dotasks"/>
                </div>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  role="button" data-bs-toggle="dropdown" aria-expanded="false">ICONE USER</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item">user_name + user_emial</a></li>
                                <li><a className="dropdown-item" >Home</a></li>
                                <li><a className="dropdown-item" >Configurações</a></li>
                                <li><a className="dropdown-item" >Sair</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    
    )
}

export default Navbar;