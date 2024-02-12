import './ArtistCardHorizontal.scss';
import cardContent from '../CardBasicContent';

function ArtistCardHorizontal ({cardArtistName}) {
    const cards = cardContent[cardArtistName]

    return (
        <>

            <div className="card-bloc--artist-horizontal">
                {cards.map((artist, index) => (
                    <article key={index}>
                        <div className="card-item-left--artist-horizontal">
                            <img src={artist.image} alt={artist.title} />
                        </div>

                        <div className="card-item-right--artist-horizontal">
                            <h3>{artist.title}</h3>
                            <p className='artist-text'>{artist.description}</p>
                            </div>    
                    </article>
                ))}
            </div>
            
        </>
    )
}

export default ArtistCardHorizontal;

