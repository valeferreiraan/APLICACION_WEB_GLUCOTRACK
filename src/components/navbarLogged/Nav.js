import './Nav.css';
import Login from '../../pages/login/Login';
import {Link} from "react-router-dom";
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { useState } from 'react';


function Nav(){
        const [isMenuOpen, setMenuOpen] = useState(false);

        const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        };
    return(
        <nav className = {`navbar ${isMenuOpen ? 'open' : ''}`}>
                <BurgerMenu toggleMenu={toggleMenu}/>
            <div className="nav-link">
                
                    <Link to="/home">Inicio</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/nuevaMedida">Nueva Medida</Link>

            </div>
            <div className="nav-link">
                
                   <Link to="/historial-glucosa">Historial Glucosa</Link>
                
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