import { useState } from 'react';
import './cardDatosPersonales.css'

const CardDatosPersonales = ({title, numberOfInputs, inputLabels, defaultValues }) => {
    const [inputValues, setInputValues] = useState(defaultValues);
    const [isInputsBlocked, setInputsBlocked] = useState(true);
    const [isButtonClicked, setButtonClicked] = useState(false);
    
  
    const handleInputChange = (index, value) => {
      if (!isInputsBlocked) {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
      }
    };
  
    const toggleInputBlocking = () => {
      setInputsBlocked(!isInputsBlocked);
      setButtonClicked(true)
    };
  
    return (

      <div className='box-datos-personales'>
        <div className='headerBoxDatos'>
            <h2>{title}</h2>
            <button
          onClick={toggleInputBlocking}
          className={isButtonClicked ? (isInputsBlocked ? 'locked' : 'unlocked') : ''}
        >
          {isInputsBlocked ? 'Editar' : 'Guardar'}
        </button>
        </div>


        <div className='containerInputs'>
        {inputValues.map((value, index) => (
            <div key={index} className="input-row">
                <label>{inputLabels[index]}</label>
                <input className="long-label"
                type="text"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                disabled={isInputsBlocked}
                />
            </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default CardDatosPersonales;