import RegisterCard from '../../Components/Card/RegisterCard';
import Logo from '../../assets/img/logo.svg'
import './Register.css'

const Register = () => {
    return (
        <div className="register">
            <img src={Logo} alt="logo" />
            <RegisterCard/>
        </div>  
    )
}

export default Register;