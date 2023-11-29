import React, { useState } from 'react';
import './BurgerMenu.css';  
import menu from './menu-regular-60.png'

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    
  };

  return (
    <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <img src={menu} alt="Menu" />
    </div>
  );
};

export default BurgerMenu;
