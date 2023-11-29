import './Login.css';
import NameandLogo from '../../components/headerLogSign/NameandLogo';
import SignupForm from '../../components/signupForm/SignupForm';
import MedForm from '../../components/signupForm/medForm';
import { useSnackbar } from 'notistack';


import {Link} from "react-router-dom";

function SignUp(){
    const {enqueueSnackbar} = useSnackbar()

    const handleClick = () => {
        enqueueSnackbar("Cuenta creada correctamente", {
            variant:"success"
        })
    }
    return(
        <div className='container container-signup'>
            <div className='left'>

            </div>
            <div className='right'>
                <NameandLogo/>
                <div className='form signupForm'>
                    <div class="expl">
                        <h1>
                            Crear una cuenta
                        </h1>
                        <p>
                            Ten acceso completo a nuestros servicios creando una cuenta.
                        </p>
        
                    </div>
                    <SignupForm/>
                    <p>
                        Para una mejor experiencia, te preguntaremos algunos datos sobre tu salud.
                    </p>
                    <br/><br></br>
                    <MedForm/>
                    
                </div>
                <div class = "bottomSignup">
                <div>
                    <input type="checkbox" id="remindMe" value="remindMe"/>
                    <label for="remindMe"> Estoy de acuerdo y he leído los <span id="terminos">
                        Términos y condiciones
                    </span> </label>
                </div>
                
                    <Link to='/home' onClick={handleClick}>
                        Crear una cuenta
                    </Link>
                
            </div>
            <div class="noAcc">
                <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
            </div>



            </div>
        </div>
    )
}

export default SignUp;