import './home.css';
import Subheader from '../../components/subheader/subheader';
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import CardInfo from '../../components/cardInfo/cardInfo';
import Footer from '../../components/footer/Footer';

import info1 from './img/1.png';
import info2 from './img/2.png';
import info3 from './img/3.png';
import info4 from './img/reminders.png';
import info5 from './img/medicalattention.png';

import IconHome from './img/home-heart-regular-84.png';

function Home(){
    return(
        <div>
            <Header/>
            <Nav/>
            <Subheader 
            image='https://consultorsalud.com/wp-content/uploads/2022/12/shutterstock_1726536925.jpg'
            title='Bienvenido'
            subtitle='Tu última medida fue'
            icon={IconHome}/>
            <div className='content'>
                <div className='services'>
                <CardInfo 
                        image={info1}
                        title = 'Agrega tus medidas'
                        text1= ' ¡Al momento que lo hagas! Registra tus medidas para tener control de tus niveles de azúcar y ver los cambios que has tenido.'
                        popover='Puedes ponerla al momento de medirte, o después y poner la hora.'
                        color='var(--azulClaro1)'
                    />

                    <CardInfo 
                        image={info2}
                        title = 'Lleva control'
                        text1= ' Todas tus medidas quedarán guardadas para que puedas ver cómo se están comportando tus niveles de glucosa.'
                        popover='Gráficas interactivas, por día, semana, o mes. '
                        color='var(--azulprimario)'
                    />

                    <CardInfo 
                        image={info3}
                        title = 'Aliméntate bien'
                        text1= ' Podrás llevar control de las comidas que consumes, así, podrás relacionarlo con tus niveles de azúcar.'
                        popover='Las comidas pueden influir más de lo que crees en tus niveles de glucosa. '
                        color='var(--azulClaro1)'
                    />

                    <CardInfo 
                        image={info4}
                        title = 'Alertas y recordatorios'
                        text1= ' ¿Se te olvida aplicarte la insulina? Activa los recordatorios de insulinas y medicamentos para que no te vuelva a pasar.'
                        popover='Es tú control, tú eres quien decide las horas de los recordatorios. '
                        color='var(--azulprimario)'
                    />

                    <CardInfo 
                        image={info5}
                        title = 'Atención médica'
                        text1= 'Todo más fácil, envía directamente a tu médico/a tus niveles de azúcar para agilizar las consultas.'
                        popover='En casos de emergencia, cuando el azúcar está muy alta o muy baja, nos podemos poner en contacto con tu médico/a. '
                        backgroundColor='var(--azulClaro1)'
                    />

                </div>
            
            </div>
            <Footer />
        </div>
    )
}

export default Home;