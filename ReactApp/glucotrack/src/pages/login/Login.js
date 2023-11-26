import './Login.css';

import NameandLogo from '../../components/headerLogSign/NameandLogo';
import LoginForm from '../../components/loginForm/LoginForm';

import {Link} from "react-router-dom";

function Login(){
    return(
        <div className="container">
            <div className="left">

            </div>
            <div className="right">
               <NameandLogo/> 
               <div className='form'>
                    <div className='expl'>
                        <h1>
                            Iniciar sesión
                        </h1>
                        <p>
                            Ingresa tu correo y contraseña.
                        </p>
                        <br></br>
                    </div>
                    <LoginForm></LoginForm>
               </div>
               <div class = "bottomLogin">
                <div>
                    <input type="checkbox" id="remindMe" value="remindMe"/>
                    <label for="remindMe"> Recordarme</label>
                </div>
                
                    <Link to="/home">
                        Iniciar Sesión
                    </Link>
                
            </div>
            <div class="noAcc">
                <p>¿No tienes una cuenta aún? <Link to = "/signup">Regístrate aquí</Link></p>
            </div>
            </div>
            
        </div>
    )
}

export default Login;