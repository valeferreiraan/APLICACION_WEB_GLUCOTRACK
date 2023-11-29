import './Footer.css'

function Footer(){
    return(
        <div className='footer'>
            
            <div class="footer-left">
                <p>
                    Hecho por: <br/>
                    Valeria Ferreira <br/>
                    Felipe Muñoz
                </p>
            </div>
            <div class="contact">
                <p>
                    Contáctanos <br/>
                    valeria.ferreira@urosario.edu.co <br/>
                    felipe.munozv@urosario.edu.co
                </p>
            </div>
            <div class="footer-right aligned-footer">
                <p>
                    2023 GlucoTrack © Todos los derechos reservados.
                </p>
            </div>
        </div>
    )
}

export default Footer;