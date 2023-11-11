import './Nav.css';
import Login from '../../pages/login/Login';

function Nav(){
    return(
        <nav className = "navbar">
            <div className="nav-link nav-linkOn">
                <a href="#">Inicio</a>
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
                <a href="./views/login.html">Salud</a>
            </div>
            <div className="nav-link">
                <a href="./views/login.html">Atención médica</a>
            </div>
            <div className="nav-link">
                <a href="./views/login.html">Perfil</a>
            </div>
        </nav>
    )
}

export default Nav;