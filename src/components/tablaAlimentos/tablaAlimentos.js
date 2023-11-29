import { useState, useEffect } from 'react';
import './tablaAlimentos.css';



  const calculateTotals = (data) => {
    return {
      hora: 'Total',
      alimento: '',
      azucar: data.reduce((sum, row) => sum + row.azucar, 0),
      carbohidratos: data.reduce((sum, row) => sum + row.carbohidratos, 0),
      calorias: data.reduce((sum, row) => sum + row.calorias, 0),
    };
  };
  

  const TablaAlimentos = ({initialData}) => {
    const [data, setData] = useState(initialData);
    const [sortOrder, setSortOrder] = useState('asc');
  
    const handleSort = (column) => {
      const sortedData = [...data].sort((a, b) => {
        if (column === 'hora') {
          const timeA = new Date(`2000-01-01T${a.hora}`);
          const timeB = new Date(`2000-01-01T${b.hora}`);
  
          if (sortOrder === 'asc') {
            return timeA - timeB;
          } else {
            return timeB - timeA;
          }
        } else {
          if (sortOrder === 'asc') {
            return a[column] - b[column];
          } else {
            return b[column] - a[column];
          }
        }
      });
  
      setData(sortedData);
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };
  
    return (
      <div>
        <table className="customTable">
          <thead>
            <tr>
              <th className='headerHora' onClick={() => handleSort('hora')}>Hora</th>
              <th>Alimento</th>
              <th onClick={() => handleSort('azucar')}>Azúcar</th>
              <th onClick={() => handleSort('carbohidratos')}>Carbohidratos</th>
              <th className='headerCalorias'  onClick={() => handleSort('calorias')}>Calorías</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.hora}</td>
                <td>{row.alimento}</td>
                <td>{row.azucar}</td>
                <td>{row.carbohidratos}</td>
                <td>{row.calorias}</td>
              </tr>
            ))}
            <tr className='totalTabla'>
              <td>{calculateTotals(data).hora}</td>
              <td>{calculateTotals(data).alimento}</td>
              <td>{calculateTotals(data).azucar}</td>
              <td>{calculateTotals(data).carbohidratos}</td>
              <td>{calculateTotals(data).calorias}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TablaAlimentos;
