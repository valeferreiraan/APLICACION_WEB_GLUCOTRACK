




function MedForm(){
    return (
        <form name="healthInfo" action="" method="">
            <label for="med">
                        Médico/a
                    </label>
                    <input type="text" name="med" id="med"/>
                    <br/>
                    <br/>
                    <label for="email">
                        E-mail
                    </label>
                    <input type="email" name="email" id="email"/>
                    <br/><br/>
                    <label for="insulina">¿Te aplicas insulina?</label>
                    <input id="insulinayes" type="radio" 
                    name="insulina"/> Sí
                    <input id="insulinano" type="radio" name="insulina"/> No

                    <br/><br/>    
                    


        </form>
    )
}

export default MedForm;