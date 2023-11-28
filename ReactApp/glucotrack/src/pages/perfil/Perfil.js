import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav'
import Subheader from '../../components/subheader/subheader';
import IcconProfile from './img/bxs-user.svg'
import CardDatosPersonales from '../../components/cardDatosPersonales/cardDatosPersonales';

function Perfil(){
    const inputLabelsPersonales = ['Nombre', 'Email', 'Edad', 'Pais'];
    const defaultValuesPersonales = ['Pepito Pérez', 'pepito.perez@gmail.com', '34', 'Colombia'];

    const inputLabelsMedico = ['Nombre', 'Email']
    const defaultValuesMedico = ['Carlos Rodríguez', 'carlos.rodriguez@gmail.com']


    return(
        <div>
            <Header />
            <Nav />
            <Subheader  image='https://img.freepik.com/fotos-premium/cuaderno-maquetas-rayas-espacio-notas-fondo-rayado-grafico-bloc-notas-abierto-anillos-ilustracion-3d_116124-11016.jpg?w=900'
                title='Perfil'
                subtitle='Administra tus datos personales'
                icon={IcconProfile}    />
            <CardDatosPersonales numberOfInputs={inputLabelsPersonales.length} 
            inputLabels={inputLabelsPersonales} 
            title={'Datos Personales'}
            defaultValues={defaultValuesPersonales}/>

            <CardDatosPersonales numberOfInputs={inputLabelsPersonales.length} 
            inputLabels={inputLabelsMedico} 
            title={'Contacto de salud'}
            defaultValues={defaultValuesMedico }/>

        </div>
    )

}

export default Perfil