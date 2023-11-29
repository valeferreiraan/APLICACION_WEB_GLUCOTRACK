
import React, { useState } from 'react';
import GraficaSemana from '../../components/grafica/grafica';
import GraficaDia from '../../components/grafica/graficaDia';
import GraficaMes from '../../components/grafica/graficaMes';
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import Subheader from '../../components/subheader/subheader';
import './historial.css'
import iconChart from './img/bar-chart-regular-84.png';


function Historial(){

    const [selectedChart, setSelectedChart] = useState('semana');

    const handleButtonClick = (chartType) => {
      setSelectedChart(chartType);
    };

    return(
        <div>
            <Header/>
            <Nav/>
            <Subheader 
            image='https://consultorsalud.com/wp-content/uploads/2022/12/shutterstock_1726536925.jpg'
            title='Historial de mediciones'
            subtitle='Revisa tus medidas registradas'
            icon={iconChart}/>
            <div className='content'>
               <div className='historial'>
                <div className='grafica'>
                    {selectedChart === 'semana' && <GraficaSemana/>}
                    {selectedChart === 'dia' && <GraficaDia/>}
                    {selectedChart === 'mes' && <GraficaMes/>}

                </div>
                <div className='changeGrafico'>
                    <h3>Revisa tus mediciones por:</h3>
                    <button onClick={() => handleButtonClick('dia')}>Día</button>
                    <button onClick={() => handleButtonClick('semana')}>Semana</button>
                    <button onClick={() => handleButtonClick('mes')}>Mes</button>
                </div>
                <div className='resumen'>
                    <h3>Resumen</h3>
                    

                </div>
                </div> 
                <div className='descarga'>

                </div>
            
            </div>

        </div>
    )
}


export default Historial;