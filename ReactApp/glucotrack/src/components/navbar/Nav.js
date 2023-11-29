import './Nav.css';

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
                
                    <Link to="/">Inicio</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/login">Nueva Medida</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/login">Historial Glucosa</Link>
                
            </div>
            <div className="nav-link">
                
                   <Link to="/login">Alimentación</Link>
                
            </div>

            <div className="nav-link">
                
                    <Link to="/login">Salud</Link>
                
            </div>
            <div className="nav-link">
                
                    <Link to="/login">Atención médica</Link>
                
            </div>
            <div className="nav-link">
                
                    <Link to="/login">Perfil</Link>
                
            </div>
        </nav>
    )
}

export default Nav;