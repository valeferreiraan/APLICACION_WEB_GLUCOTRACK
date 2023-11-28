import './UsuariosAdmin.css'
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import Subheader from '../../components/subheader/subheader';
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
            subtitle={'Acá puedes gestionar los usarios registrados en Glucotrack'}
            icon={IconGestionUsuarios}/>
            <TablaUsuarios />
        </div>
    );
  };
  

export default UsuariosAdmin