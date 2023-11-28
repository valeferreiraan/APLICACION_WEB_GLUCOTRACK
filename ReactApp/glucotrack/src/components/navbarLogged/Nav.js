import './Nav.css';
import Login from '../../pages/login/Login';
import {Link} from "react-router-dom";


function Nav(){
    return(
        <nav className = "navbar">
            <div className="nav-link">
                
                    <Link to="/home">Inicio</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/nuevaMedida">Nueva Medida</Link>

            </div>
            <div className="nav-link">
                
                   <Link to="/login">Historial Glucosa</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/alimentacion">Alimentación</Link>
                
            </div>

            <div className="nav-link">
                
                    <Link to="/salud">Salud</Link>
                
            </div>
            <div className="nav-link">
                
                    <Link to="/atencion-medica">Atención médica</Link>
                
            </div>
            <div className="nav-link">
                
                    <Link to="/perfil">Perfil</Link>
                
            </div>
        </nav>
    )
}

export default Nav;