import React from 'react';
import HealthTips from '../../components/HealthTips/HealthTips';
import Header from '../../components/headerLogged/Header';
import Subheader from '../../components/subheader/subheader';
import saludIcon from './clinic-solid-84.png';
import foto from './foto.jpg';
import Nav from '../../components/navbarLogged/Nav';

function Salud() {
  return (
    <div>
        <Header/>
        <Nav/>
        <Subheader
        image ={foto}
        title = 'Salud'
        subtitle='Mantente al tanto con estos tips'
        icon = {saludIcon}/>
        <div className='content'>
            <HealthTips />
        </div>
      
    </div>
  );
}

export default Salud;