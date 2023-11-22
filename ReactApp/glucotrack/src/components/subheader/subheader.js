import './subheader.css';

function subheader({image,icon, title, subtitle}){
    
    const cardStyle = {
        backgroundImage:`url(${image})`,
    };

    return(
        <div className="subheader" style={cardStyle}>
            <img src={icon} className='Icon'></img>
            <div className="ContenidoSubheader">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>    
        </div>
    )
}

export default subheader;