import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import Subheader from '../../components/subheader/subheader';
import './AtencionMedica.css'
import MedIcon from './plus-medical-regular-84.png';

import React, { useState } from 'react';





function AtencionMedica(){

    
        const [exportType, setExportType] = useState('day');
        const [email, setEmail] = useState('');
        const [modalVisible, setModalVisible] = useState(false);
      
        const handleExportTypeChange = (event) => {
          setExportType(event.target.value);
        };
      
        const handleEmailChange = (event) => {
          setEmail(event.target.value);
        };
      
        const enviarFormulario = () => {
          // Aquí puedes agregar la lógica para enviar los datos al servidor o realizar cualquier otra acción necesaria.
          // Por ahora, solo mostramos el modal.
          console.log('Formulario enviado')
          setModalVisible(true);
        };
      
        const cerrarModal = () => {
          setModalVisible(false);
        };

        
    return(
        <div>
            <Header/>
            <Nav/>
            <Subheader
            image = ''
            title = "Atención Médica"
            subtitle = 'Envía tus datos a tu médico'
            icon = {MedIcon}/>
            <div className='content'>
            <form className='sendData'>
        <label htmlFor="exportType">Selecciona el intervalo de tiempo:</label>
        <select id="exportType" name="exportType" value={exportType} onChange={handleExportTypeChange}>
          <option value="day">Día</option>
          <option value="week">Semana</option>
          <option value="month">Mes</option>
        </select>

        <label htmlFor="email">Selecciona el correo de destino:</label>
        <select id="email" name="email" value={email} onChange={handleEmailChange}>
          <option value="correo1@example.com">Correo 1</option>
          <option value="correo2@example.com">Correo 2</option>
          <option value="correo3@example.com">Correo 3</option>
        </select>

        <button type="button" onClick={enviarFormulario}>Enviar</button>
      </form>
      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            
            
            <h4>¡Datos enviados correctamente!</h4>
            
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}

            </div>

        </div>
    )
}

export default AtencionMedica;