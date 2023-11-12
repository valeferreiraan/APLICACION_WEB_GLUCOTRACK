import './LoginForm.css';

function LoginForm(){
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
                    <a href="#">¿Olvidaste la contraseña?</a>
        </form>
    )

}

export default LoginForm;