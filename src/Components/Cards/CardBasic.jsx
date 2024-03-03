import './CardBasic.scss';
import '../Buttons/Buttons.scss';
import cardContent from './CardBasicContent';


function CardBasic({cardSubject}) {
    const cards = cardContent[cardSubject]

    return (

     <div className="card-bloc">
        {cards.map((card, index) => (
            <article key={index}>
                <div className="card-item">
                    <img src={card.image} alt={card.title} />
                </div>

                <div className="card-content-bottom">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    </div>    

                    {card.buttonText && (
                        <div className="button-homepage-card">
                            <button>{card.buttonText}</button>
                        </div>
                    )}
            </article>
        ))}
    </div>

    )
}

export default CardBasic;