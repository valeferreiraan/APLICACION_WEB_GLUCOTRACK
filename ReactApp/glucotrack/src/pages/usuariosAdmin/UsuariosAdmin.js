import './UsuariosAdmin.css'
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import Subheader from '../../components/subheader/subheader';
import Footer from '../../components/footer/Footer';

import TablaUsuarios from '../../components/tablaUsuarios/tablaUsuarios';
import ImgSubheader from './img/imgSubheader.jpg'
import IconGestionUsuarios from './img/bxs-user-detail.svg'


const UsuariosAdmin = () => {
    return(
        <div>
            <Header />
            <Nav />
            <Subheader 
            image={ImgSubheader}
            title={'Gestión de Usuarios'}
            subtitle={'Gestiona los usarios registrados en Glucotrack'}
            icon={IconGestionUsuarios}/>
            <TablaUsuarios />
            <Footer />
        </div>
    );
  };
  

export default UsuariosAdmin