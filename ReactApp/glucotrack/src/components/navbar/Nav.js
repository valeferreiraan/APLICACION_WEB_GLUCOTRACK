import './Nav.css';
import Login from '../../pages/login/Login';
import {Link} from "react-router-dom"
    


function Nav(){
    return(
        <nav className = "navbar">
            <div className="nav-link nav-linkOn">
                <a>
                    <Link to="/">Inicio</Link>
                </a>
            </div>
            <div className="nav-link">
                <a href={Login}>Nueva Medida</a>
            </div>
            <div className="nav-link">
                <a href="./views/login.html">Historial glucosa</a>
            </div>
            <div className="nav-link">
                <a href="./views/login.html">Alimentación</a>
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