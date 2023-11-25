import './Alimentacion.css'
import Header from '../../components/header/Header';
import Nav from '../../components/navbar/Nav'
import CardAlimento from '../../components/cardAlimento/cardAlimento'
import Imgcarne from './img/carne.jpg'
import Subheader from '../../components/subheader/subheader';

import IconBook from './img/food-menu-solid-84.png'

import ProgressComponent from '../../components/progressComponent/ProgressComponent;';

function Alimentacion(){
    return(
    <div>
        <Header />
        <Nav />
        <Subheader image ='https://s1.eestatic.com/2023/10/03/vivir/799180512_236508436_1706x960.jpg' 
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

                <CardAlimento image='https://thefoodtech.com/wp-content/uploads/2020/06/huevo-828x548.jpg'
                title = 'Huevo'/>

                <CardAlimento image='https://telemedellin.tv/wp-content/uploads/2022/10/por-que-el-pan-se-pone-duro.jpg'
                title = 'Pan'/>


                <CardAlimento image='https://www.gourmet.com.co/wp-content/uploads/2022/11/productos-lacteos-gourmet.jpg'
                title = 'Lácteos'/>

                <CardAlimento image='https://www.fisenf.com/wp-content/uploads/2015/11/frutas-y-frutos-secos.jpg'
                title = 'Frutas'/>

                <CardAlimento image='https://phantom-marca.unidadeditorial.es/f26736e71a6bfb79e3a2b0c631a1bf4e/resize/828/f/jpg/assets/multimedia/imagenes/2023/05/30/16854588843943.jpg'
                title = 'Verduras'/>

                <CardAlimento image='https://institutodeobesidad.com/wp-content/uploads/2018/02/IMAGEN-16555558-2.jpg' 
                title = 'Granos'/>

                <CardAlimento image='https://d100mj7v0l85u5.cloudfront.net/s3fs-public/styles/webp/public/2023-03/asi-esta-el-mercado-de-dulces-en-colombia.png.webp?itok=rAFhU52j'
                title = 'Dulces'/>

                <CardAlimento image='https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/05/16/comida-rapida.jpeg'
                title = 'Comida rápida'/>

                <CardAlimento image='https://thefoodtech.com/wp-content/uploads/2022/06/industria_de_bebidas_1-828x548.jpg'
                title = 'Bebidas'/>
            </div>
        </div>

        <div className='containerResumen'>
            <ProgressComponent cal = '1900' sug = '30' carb='100'/>
        </div>

    </div>)
}

export default Alimentacion;


