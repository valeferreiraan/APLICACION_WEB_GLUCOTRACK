import Logo from './logo.png';
import './Header.css';
import Login from '../../pages/login/Login';

function Header(){
    return(
        <header>
            <div className="logo">
            <img src={Logo}/>
        </div>
        <div className="title">
            <h1>GlucoTrack</h1>
        </div>
        <div className="logButtons">
            
                <a href='../../pages/login/Login'>Iniciar Sesión</a>
            
                <a href="#"> Registrarse </a>
        </div>
        </header>
    )
}

export default Header;