import './ArtistCard.scss';
import cardContent from '../CardBasicContent';


function ArtistCard({cardArtist}) {
    const cards = cardContent[cardArtist]

    return (
        <>
    <div className='line-under-header'></div>
     <div className="card-bloc--artist">
        {cards.map((artist, index) => (
            <article key={index}>
                <div className="card-item-left--artist">
                    <img src={artist.image} alt={artist.title} />
                    <h3>{artist.title}</h3>
                </div>

                <div className="card-item-right--artist">
                    <p className='artist-text'>{artist.description}</p>
                    </div>    
            </article>
        ))}
    </div>
    </>

    )
}

export default ArtistCard;