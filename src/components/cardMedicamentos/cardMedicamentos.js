import './cardMedicamentos.css'
import { useState } from 'react';


const CardMedicamentos = ({defaultMedicines }) => {
 
  const [medicamentos, setMedicines] = useState(defaultMedicines)
    const [isDisabled, setIsDisabled] = useState(true);
    const [isButtonClicked, setButtonClicked] = useState(false);
  
    const cambioMedicamento = (medicineIndex, key, value) => {
      if (!isDisabled) {
        const updatedMedicines = [...medicamentos];
        updatedMedicines[medicineIndex][key] = value;
        setMedicines(updatedMedicines);
      }
    };
  
    const cambioTiempo = (medicineIndex, timeIndex, newTime) => {
      if (!isDisabled) {
        const updatedMedicines = [...medicamentos];
        updatedMedicines[medicineIndex].times[timeIndex] = newTime;
        setMedicines(updatedMedicines);
      }
    };
  
    const agregarMedicina = () => {
      if (!isDisabled) {
        setMedicines([...medicamentos, { name: '', times: [''] }]);
      }
    };
  
    const quitarMedicamento = (medicineIndex) => {
      if (!isDisabled) {
        const updatedMedicines = [...medicamentos];
        updatedMedicines.splice(medicineIndex, 1);
        setMedicines(updatedMedicines);
      }
    };
  
    const agregarTiempo = (medicineIndex) => {
      if (!isDisabled) {
        const updatedMedicines = [...medicamentos];
        updatedMedicines[medicineIndex].times = [...updatedMedicines[medicineIndex].times, ''];
        setMedicines(updatedMedicines);
      }
    };
  
    const quitarTiempo = (medicineIndex, timeIndex) => {
      if (!isDisabled) {
        const updatedMedicines = [...medicamentos];
        updatedMedicines[medicineIndex].times = updatedMedicines[medicineIndex].times.filter((_, index) => index !== timeIndex);
        setMedicines(updatedMedicines);
      }
    };
  
    const editarGuardar = () => {
      setIsDisabled(!isDisabled);
      setButtonClicked(true)
    };
  
    return (
      <div className='containerMedicamentos'>
        <div className='headerBoxDatos'>
          <h2>Medicamentos</h2>
          <button onClick={editarGuardar}
          className={isButtonClicked ? (isDisabled ? 'locked' : 'unlocked') : ''}>
            {isDisabled ? 'Editar' : 'Guardar'}
          </button>
        </div>



        {medicamentos.map((medicine, medicineIndex) => (
          <div key={medicineIndex}>
            <label>
              <input
              className='inputMedicamento'
                type="text"
                value={medicine.name}
                onChange={(e) => cambioMedicamento(medicineIndex, 'nombre', e.target.value)}
                disabled={isDisabled}
                />
            </label>
            {medicine.times.map((time, timeIndex) => (
              <div className='divInputHora' key={timeIndex}>
                <label>
                  Hora {timeIndex + 1}:
                  <input
                    className='inputHora'
                    type="time"
                    value={time}
                    onChange={(e) => cambioTiempo(medicineIndex, timeIndex, e.target.value)}
                    disabled={isDisabled}
                  />
                  {!isDisabled && medicine.times.length > 1 && (
                    <button className='buttonEliminarTiempo' onClick={() => quitarTiempo(medicineIndex, timeIndex)}>
                      Eliminar
                    </button>
                  )}
                </label>
              </div>
            ))}
            {!isDisabled && (
              <div className='divbuttonAgregarTiempo'>
                <button className='buttonAgregarTiempo' onClick={() => agregarTiempo(medicineIndex)}>Añadir tiempo</button>
                {medicamentos.length > 1 && (
                  <button className='buttonQuitarMedicamento' onClick={() => quitarMedicamento(medicineIndex)}>
                    Eliminar medicamento
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
        {!isDisabled && <button className='buttonAgregarMedicamento' onClick={agregarMedicina}>Añadir Medicamento</button>}
      </div>
    );
  };


export default CardMedicamentos