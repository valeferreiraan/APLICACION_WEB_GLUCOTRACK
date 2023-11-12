import './NameandLogo.css';
import Logo from '../header/logo.png';

function NameandLogo(){
    return(
        <div className='nameandlogo'>
            <img src={Logo}></img>
            <h1>GlucoTrack</h1>
        </div>
    )
}

export default NameandLogo;