import './RegistroAlimentacion.css'
import Header from '../../components/header/Header';
import Nav from '../../components/navbarLogged/Nav'
import Subheader from '../../components/subheader/subheader';

import IconBook from './img/food-menu-solid-84.png'
import Arrow from './img/bx-chevron-left.svg'
import DayScroller from '../../components/dayScroller/DayScroller';
import TablaAlimentos from '../../components/tablaAlimentos/tablaAlimentos';
import { Link } from 'react-router-dom';

const datosAlimentacion = [
    { hora: '07:00', alimento: 'Huevos', azucar: 2, carbohidratos: 30, calorias: 300 },
    { hora: '09:00', alimento: 'Pan', azucar: 10, carbohidratos: 30, calorias: 200 },
    { hora: '12:30', alimento: 'Carne', azucar: 5, carbohidratos: 40, calorias: 1000 },
    { hora: '13:40', alimento: 'Tomate', azucar: 12, carbohidratos: 40, calorias: 500 },

  ];


function RegistroAlimentacion(){
    return(
        <div>
            <Header />
            <Nav />
            <Subheader image ='https://s1.eestatic.com/2023/10/03/vivir/799180512_236508436_1706x960.jpg' 
            title='Alimentación'
            subtitle='Registra los alimentos que consumes'
            icon={IconBook}/>
            <div className='Subtitle-registroAlimentacion'>
                <div className='boxPrincipal'>
                    <a>
                        <Link to="../alimentacion">
                            <img src={Arrow} className='backArrow'></img>
                        </Link>
                    </a>
                    <h1>Registro completo de alimentación</h1>
                </div>
                <h2>Aquí encontrarás un informe detallado sobre los alimentos registrados</h2>
            </div>
            <DayScroller />

            <div className='containerTabla'>
            <TablaAlimentos initialData={datosAlimentacion}/>
            </div>
        </div>
    )

}

export default RegistroAlimentacion