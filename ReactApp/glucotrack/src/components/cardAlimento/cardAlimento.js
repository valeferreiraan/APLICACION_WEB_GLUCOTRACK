import './cardAlimento.css';

function cardAlimento({image, title}){
    
    const cardStyle = {
        backgroundImage:`url(${image})`,
    };

    return(
        <div className="cardAlimento" id="cardAlimento" style={cardStyle}>
            <div className="Alimento">
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default cardAlimento;
