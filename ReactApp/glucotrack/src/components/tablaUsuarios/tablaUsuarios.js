import { useState } from 'react';
import './tablaUsuarios.css'


const TablaUsuarios= () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Arturo Ferrira',email:'aurturo.ferreira@gmail.com', age: 60,  },
    { id: 2, name: 'Valeria Ferreira',email:'valeria.ferreira@gmail.com', age: 21 },
  ]);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editedUsers, setEditedUsers] = useState({});
  const [newUser, setNewUser] = useState({ name: '', age: '' });
  const [modalVisible, setModalVisible] = useState(false);

  const handleEdit = (id) => {
    setEditingUserId(id);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
  };

  const handleSave = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, ...editedUsers[id] } : user
    );
    setUsers(updatedUsers);
    setEditingUserId(null);
  };

  const handleEditChange = (id, field, value) => {
    setEditedUsers((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  };

  const handleAdd = () => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setNewUser({ name: '', age: '' , email: ''});
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div className='containerTablaUsuarios'>
      <table cellSpacing={'50px'} className='tableEditarUsuarios'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedUsers[user.id]?.name || user.name}
                    onChange={(e) => handleEditChange(user.id, 'name', e.target.value)}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="text"
                    value={editedUsers[user.id]?.email || user.email}
                    onChange={(e) => handleEditChange(user.id, 'email', e.target.value)}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editingUserId === user.id ? (
                  <input
                    type="number"
                    value={editedUsers[user.id]?.age || user.age}
                    onChange={(e) => handleEditChange(user.id, 'age', e.target.value)}
                  />
                ) : (
                  user.age
                )}
              </td>
              

              <td className='botonesEditar'>
                {editingUserId === user.id ? (
                  <button onClick={() => handleSave(user.id)}>Guardar</button>
                ) : (
                  <button onClick={() => handleEdit(user.id)}>Editar</button>
                )}
                <button onClick={() => handleDelete(user.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    
      <div className='containerAgregarUsuario'>
        <h2>Añadir Usuario</h2>     
        <div className='divAgregarUsuario'>
          
          <div className='formAgregarUsuario'>
          <label>Nombre:</label>
          <input
            type="text"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          />
          <label>Email:</label>
          <input
            type="text"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
          <label>Edad:</label>
          <input
            type="number"
            value={newUser.age}
            onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
          />
          </div>
          
          <button className='buttonAgregarUsuario' onClick={handleAdd}>Añadir</button>
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
                
                
                <h4>Usuario añadido</h4>
                
                <button onClick={cerrarModal}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default TablaUsuarios