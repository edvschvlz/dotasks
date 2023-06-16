import Card from "../../Components/Card";
import "./Login.css";
import Logo from '../../assets/img/logo.svg'


const Login = () => {
    return (
        <div className="login">
            <img src={Logo} alt="logo" />
            <Card/>
        </div>  
    )
}

export default Login;