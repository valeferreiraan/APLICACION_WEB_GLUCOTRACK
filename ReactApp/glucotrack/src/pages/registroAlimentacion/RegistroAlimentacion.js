import './RegistroAlimentacion.css'
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav'
import Subheader from '../../components/subheader/subheader';

import IconBook from './img/food-menu-solid-84.png'
import DayScroller from '../../components/dayScroller/DayScroller';



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
                <h1>Registro completo de alimentación</h1>
                <h2>Aquí encontrarás un informe detallado sobre los alimentos registrados</h2>
            </div>
            <DayScroller />
        </div>
    )

}

export default RegistroAlimentacion