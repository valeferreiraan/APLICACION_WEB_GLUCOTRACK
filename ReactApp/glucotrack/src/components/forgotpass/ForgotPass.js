import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import './ForgotPass.css';

const ForgotPass = ({ open, onClose }) => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendButtonClick = () => {
    console.log('Enviar correo a:', email);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="modal-container">
        <div className="modal-content">
          <h2>¿Olvidaste tu contraseña?</h2>
          <p>Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.</p>
          <TextField
            label="e-mail"
            type="email"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            margin="normal"
          />
          <Button variant="contained" color="primary" onClick={handleSendButtonClick}>
            Enviar
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ForgotPass;
