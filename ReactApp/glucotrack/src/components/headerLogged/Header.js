import Logo from './logo.png';
import './Header.css';
import Login from '../../pages/login/Login';
import {Link} from "react-router-dom";

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
            
                
                    <Link to="/">Cerrar sesión</Link>
                    
                
            
                
        </div>
        </header>
    )
}

export default Header;