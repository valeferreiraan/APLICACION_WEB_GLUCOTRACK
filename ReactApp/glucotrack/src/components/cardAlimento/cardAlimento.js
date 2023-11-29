import './cardAlimento.css';
import React, { useState  } from 'react';


function CardAlimento({image, title}){
    const [counter, setCounter] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    
    const cardStyle = {
        backgroundImage:`url(${image})`,
    };

    const [cardVisible, setCardVisible] = useState(false);
    const [cardPosition, setCardPosition] = useState({ top: 0, left: 0 });

    const handleSquareClick = (event) => {
        event.stopPropagation();

        const rect = event.target.getBoundingClientRect();
        const scrollLeft = document.documentElement.scrollLeft;
        const scrollTop = document.documentElement.scrollTop;

        setCardPosition({
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
        });

        setCardVisible(!cardVisible);
    };

    const handleAmountChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value)) {
          setCounter(value);
        }
      };
    
      const handleIncrease = () => {
        setCounter(counter + 1);
      };
    
      const handleDecrease = () => {
        if (counter > 0) {
          setCounter(counter - 1);
        }
      };

      const handleConfirm = () => {
        setCardVisible(false);
        setModalVisible(true);
      };

      const cerrarModal = () => {
        setModalVisible(false);
      };

    return(
        <div>
            <div className="cardAlimento" id="cardAlimento" style={cardStyle} onClick={handleSquareClick}>
                <div className="Alimento">
                    <h2>{title}</h2>
                </div>
            </div>

            <div className='containerSelector'>
                <div className='Selector' style={{ top: cardPosition.top, left: cardPosition.left, display: cardVisible ? 'flex' : 'none', }}>
                    <h3 className='titleSelector'>Ingresa el número de porciones</h3>

                    <div className='buttonSelector'>
                        <button onClick={handleDecrease} className='buttonValor'>-</button>
                        <input type="number" value={counter} onChange={handleAmountChange} className='inputSelectorAlimento'/>
                        <button onClick={handleIncrease} className='buttonValor'>+</button>
                    </div>

                    <button onClick={handleConfirm} className='buttonConfirmar'>Confirmar</button>
                </div>
            </div>
            {modalVisible && (
            <div className="modal modalAlimentacion">
              <div className="modal-content">
                
                
                <h4>¡Alimento registrado!</h4>
                
                <button onClick={cerrarModal}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
    )
}

export default CardAlimento;
