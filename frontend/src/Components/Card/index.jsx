import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <p>Acesse sua conta</p>
            <form>
                <div className="mb-3 container-input">
                    <input type="email" className="form-control" id="floatingInput" placeholder="Email" required/> 
                </div>
                <div className="mb-3 container-input">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Senha" required/>
                </div>
                <button type='submit'>Entrar</button>
            </form>
            <p>Esqueceu sua senha?</p>
        </div>
    );
};

export default Card;
