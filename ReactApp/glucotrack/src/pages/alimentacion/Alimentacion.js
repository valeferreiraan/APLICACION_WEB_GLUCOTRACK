import './Alimentacion.css'
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav'
import CardAlimento from '../../components/cardAlimento/cardAlimento'
import Imgcarne from './img/carne.jpg'
import Subheader from '../../components/subheader/subheader';

import IconBook from './img/food-menu-solid-84.png'

function Alimentacion(){
    return(
    <div>
        <Header />
        <Nav />
        <Subheader image ='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg' 
        title='Alimentación'
        subtitle='Registra los alimentos que consumes'
        icon={IconBook}/>
        
        <div className="containerGrid">
            <div className="grid">
                <CardAlimento image={Imgcarne} 
                title = 'Carne'/>

                <CardAlimento image='https://cocinemosjuntos.com.co/media/mageplaza/blog/post/t/i/tips-para-preparar-pollo-al-horno-jugoso-y-perfecto_1_.jpg' 
                title = 'Pollo'/>

                <CardAlimento image='https://www.naturalcastello.com/wp-content/uploads/2019/08/pescados-tipos-propiedades-992x448.jpg' 
                title = 'Pescado'/>

                <CardAlimento image='https://www.cocinayvino.com/wp-content/uploads/2020/08/www.cocinayvino.com-los-huevos-son-una-valiosa-fuente-de-nutrientes-huevos1-e1684325245917.jpg'
                title = 'Huevo'/>

                <CardAlimento image='https://telemedellin.tv/wp-content/uploads/2022/10/por-que-el-pan-se-pone-duro.jpg'
                title = 'Pan'/>


                <CardAlimento image='https://www.gourmet.com.co/wp-content/uploads/2022/11/productos-lacteos-gourmet.jpg'
                title = 'Lácteos'/>

                <CardAlimento image='https://www.fisenf.com/wp-content/uploads/2015/11/frutas-y-frutos-secos.jpg'
                title = 'Frutas'/>

                <CardAlimento image='https://phantom-marca.unidadeditorial.es/f26736e71a6bfb79e3a2b0c631a1bf4e/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/30/16854588843943.jpg'
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


