import Subheader from '../../components/subheader/subheader';
import Header from '../../components/headerLogged/Header';
import Nav from '../../components/navbarLogged/Nav';
import Footer from '../../components/footer/Footer';

import './NuevaMedida.css';
import DropletIcon from './img/droplet-solid-84.png';
import fotoHeader from './img/diabetes.jpg';
import checkMark from './img/approved.gif';
import {useState} from 'react';

function NuevaMedida(){

    const [mostrarModal, setMostrarModal] = useState(false);

    // Función para manejar el clic en el botón Registrar
    const handleClickRegistrar = (e) => {
        e.preventDefault();
        console.log("Haciendo clic en Registrar");
        setMostrarModal(true);
        console.log("mostrarModal:", mostrarModal);
    };

    return(
        <div>
            <Header/>
            <Nav/>
            <Subheader
            image = {fotoHeader}
            title = 'Nueva medida'
            subtitle= 'Registra tu nivel de glucosa, recuerda tener en cuenta las unidades de tu medida'
            icon = {DropletIcon}
            />

            <div className='content'>
                <div className='formRegistro'>
                <form>
                <div className="formNivel">
                    <span className="input-group-text">Glucosa en la Sangre: </span>
                    <input type="text" className="input-Nivel"/>
                    <select className="form-select">
                        <option selected>Unidades</option>
                        <option value="1">mg/dL</option>
                        <option value="2">mmol/L</option>
                    </select>
                </div>
                <br/>
                <div className="formHora">
                    <span>Hora: </span>
                    <input type="time" id="time1"/>
                    <label>
                    <input type="checkbox" id="HoraNow" value="Ahora"/> Ahora</label>
                </div>

                <br/>

                <div className="formAnimo">
                    <span>Estado de Ánimo: </span>
                    <button type="button" className="BotonAnimoBien"> </button>
                    <button type="button" className="BotonAnimoRegular"> </button>
                    <button type="button" className="BotonAnimoMal"> </button>
                </div>
                <br/>
                <button type="submit" className="botonRegistrar" onClick={handleClickRegistrar}>Registrar</button>

                </form>
            </div>
            </div>

             {/* Modal */}
      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
          <img src={checkMark}></img>
            <h4>¡Medida registrada exitosamente!</h4>
            
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    
    <Footer />
    </div>
    

    )
}

export default NuevaMedida;
