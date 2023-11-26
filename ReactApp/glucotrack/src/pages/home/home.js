import './home.css';
import Subheader from '../../components/subheader/subheader';
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';

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

        </div>
    )
}

export default Home;