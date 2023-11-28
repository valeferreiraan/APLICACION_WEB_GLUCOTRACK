import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav'
import Subheader from '../../components/subheader/subheader';
import IcconProfile from './img/bxs-user.svg'
import ImagenSubHeader from './img/16679203_5774968.jpg'

import CardDatosPersonales from '../../components/cardDatosPersonales/cardDatosPersonales';
import CardMedicamento from '../../components/cardMedicamentos/cardMedicamentos';

import './Perfil.css'

function Perfil(){
    const inputLabelsPersonales = ['Nombre', 'Email', 'Edad', 'Pais'];
    const defaultValuesPersonales = ['Pepito Pérez', 'pepito.perez@gmail.com', '34', 'Colombia'];

    const inputLabelsMedico = ['Nombre', 'Celular', 'Email']
    const defaultValuesMedico = ['Carlos Rodríguez','315622412', 'carlos.rodriguez@gmail.com']

    const defaultMedicines = [
        {
          name: 'Insulina',
          times: ['08:00', '12:30', '18:00'],
        },
        {
          name: 'Metformina',
          times: ['09:30', '15:45'],
        },
      ];

    return(
        <div>
            <Header />
            <Nav />
            <Subheader  image={ImagenSubHeader}
                title='Perfil'
                subtitle='Administra tus datos personales'
                icon={IcconProfile}    />

            <div className='gridDatos'>    
                <CardDatosPersonales numberOfInputs={inputLabelsPersonales.length} 
                inputLabels={inputLabelsPersonales} 
                title={'Datos Personales'}
                defaultValues={defaultValuesPersonales}/>

                <CardDatosPersonales numberOfInputs={inputLabelsPersonales.length} 
                inputLabels={inputLabelsMedico} 
                title={'Contacto de salud'}
                defaultValues={defaultValuesMedico }/>

                <CardMedicamento  defaultMedicines={defaultMedicines}/>
            </div>
        </div>
    )

}

export default Perfil