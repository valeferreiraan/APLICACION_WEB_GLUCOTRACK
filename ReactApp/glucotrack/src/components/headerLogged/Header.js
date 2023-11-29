import Logo from './logo.png';
import './Header.css';

import {Link} from "react-router-dom";
import { useSnackbar } from 'notistack';


function Header(){
    const {enqueueSnackbar} = useSnackbar()

    const handleClick = () => {
        enqueueSnackbar("Sesión cerrada", {
            variant:"success"
        })
    }
    return(
        <header>
            <div className="logo">
            <img src={Logo}/>
        </div>
        <div className="title">
            <h1>GlucoTrack</h1>
        </div>
        <div className="logButtons">

                    <Link to="/" onClick={handleClick}>Cerrar sesión</Link>
 
                
        </div>
        </header>
    )
}

export default Header;