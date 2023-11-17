import './Alimentacion.css'
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav'
import CardAlimento from '../../components/cardAlimento/cardAlimento'
import Imgcarne from './img/carne.jpg'

function Alimentacion(){
    return(
    <div>
        <Header />
        <Nav />

        <div className="containerGrid">
            <div className="grid">
                <CardAlimento image={Imgcarne} 
                title = 'Carne'/>

                <CardAlimento image={Imgcarne} 
                title = 'Pollo'/>

                <CardAlimento image={Imgcarne} 
                title = 'Pescado'/>

                <CardAlimento image={Imgcarne} 
                title = 'Huevo'/>

                <CardAlimento image={Imgcarne} 
                title = 'Pan'/>


                <CardAlimento image={Imgcarne} 
                title = 'Lácteos'/>

                <CardAlimento image={Imgcarne} 
                title = 'Frutas'/>

                <CardAlimento image={Imgcarne} 
                title = 'Verduras'/>

                <CardAlimento image={Imgcarne} 
                title = 'Granos'/>

                <CardAlimento image={Imgcarne} 
                title = 'Dulces'/>

                <CardAlimento image={Imgcarne} 
                title = 'Comida rápida'/>

                <CardAlimento image={Imgcarne} 
                title = 'Bebidas'/>
            </div>
        </div>
    </div>)
}

export default Alimentacion;


