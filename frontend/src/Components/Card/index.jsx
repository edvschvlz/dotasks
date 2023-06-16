import { Link } from "react-router-dom";
import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <p className='card-titulo'>Acesse sua conta</p>
            <form>
                <div className="mb-3 container-input">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" required/> 
                </div>
                <div className="mb-3 container-input">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" required/>
                </div>
                <button type='submit' className="botao-entrar">Entrar</button>
            </form>
            <Link to='/' className='card-link'>Esqueceu sua senha?</Link>
            <button type='button' className="botao-registrar">Criar conta</button>
            <button type='button' className="botao-google">Continuar com a conta do Google</button>
        </div>
    );
};

export default Card;
