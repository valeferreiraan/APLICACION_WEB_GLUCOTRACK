import ForgotPass from '../forgotpass/ForgotPass';
import './LoginForm.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginForm(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
    return(
        <form name='logIn' action='' method=''>
            <label for="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email"/>
                    <br/>
                    <br/>

                    <label for="passw">Contraseña</label>
                    <input type="password" name="pass" id="password"></input>
                    <Link onClick={handleOpenModal}>¿Olvidaste la contraseña?</Link>
                    <ForgotPass open = {isModalOpen} onClose={handleCloseModal}/>
        </form>
    )

}

export default LoginForm;