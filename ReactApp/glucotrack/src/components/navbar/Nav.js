import './Nav.css';
import Login from '../../pages/login/Login';
import {Link} from "react-router-dom";


function Nav(){
    return(
        <nav className = "navbar">
            <div className="nav-link nav-linkOn">
                <a>
                    <Link to="/">Inicio</Link>
                </a>
            </div>
            <div className="nav-link">
                <a>
                   <Link to="/login">Nueva Medida</Link>
                </a>
            </div>
            <div className="nav-link">
                <a>
                   <Link to="/login">Historial Glucosa</Link>
                </a>
            </div>
            <div className="nav-link">
                <a>
                   <Link to="/alimentacion">Alimentación</Link>
                </a>
            </div>

            <div className="nav-link">
                <a>
                    <Link to="/login">Salud</Link>
                </a>
            </div>
            <div className="nav-link">
                <a>
                    <Link to="/login">Atención médica</Link>
                </a>
            </div>
            <div className="nav-link">
                <a>
                    <Link to="/login">Perfil</Link>
                </a>
            </div>
        </nav>
    )
}

export default Nav;