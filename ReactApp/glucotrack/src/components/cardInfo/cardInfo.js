import './cardInfo.css';

function CardInfo({image, title, text1, popover, backgroundColor}){
    
    const cardStyle = {
        backgroundColor,
    };

    return(
        <div className="cajaprincipal" style ={cardStyle}>
            <div className="info">
                <img src={image} alt = "imagen" />
                <h3>{title}</h3>
                <p>{text1}</p>
                <div className = "popover-wrapper">
                    <a>
                       <h4>
                        Ver más
                        </h4> 
                    </a> 
                    <div className = "popover-content">
                        <p>{popover}</p>

                    </div>

                </div>


            </div>

        </div>
    )
}

export default CardInfo;