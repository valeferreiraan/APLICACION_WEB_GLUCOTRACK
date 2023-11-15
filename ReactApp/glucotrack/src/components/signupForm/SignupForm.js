import './Signupform.css';
function SignupForm(){
    return(
        <form name='signup' action='' method=''> 
        <label for="name">
                        Nombre
                    </label>
                    <input type="text" name="name" id="name"/>
                    <br/>
                    <br/>
                    <label for="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email"/>
                    <br/>
                    <br/>
                    <label for="age">
                        Edad
                    </label>
                    <br/>
                    <input type="number" name="edad" id="age" min="1"/>
                    <br/>
                    <br/>
                    <label for="pais">
                        País
                    </label>
                    <select id = "pais" nombre = "pais">
                    <option value="0" selected="">
                        Selecciona un país
                    </option>
                    <option value="Colombia">
                        Colombia
                    </option>
                    <option value="Venezuela">
                        Venezuela
                    </option>
                    <option value="Ecuador">
                        Ecuador
                    </option>
                    <option value="Peru">
                        Perú
                    </option>
                    <option value="Mexico">
                        México
                    </option>
                </select>
                    <br/>
                    <br/>

                    <label for="passw">Contraseña</label>
                    <input type="password" name="pass" id="passw"/>

                    <br/><br/>

                    <label for="Confpassw">Confirma tu contraseña</label>
                    <input type="password" name="passconf" id="Confpass"/>
                    <br/><br/>
                    

        </form>
    )
}

export default SignupForm;