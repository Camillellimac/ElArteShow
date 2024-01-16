import './GridGallery.scss'
import galleryContent from './GridGalleryContent';

function GridGallery({galleryName}) {
    const images = galleryContent[galleryName] || [];

    return ( 

    <div className="gallery-bloc">
        {images.map((image) => (
            <article key={image.id}>
                <div className="gallery-item">
                    <img src={image.src} alt={image.alt} />
                </div>
            </article>
        ))}
    
    </div>
    )
}

export default GridGallery; 