import './GridGallery.scss'
import galleryContent from './GridGalleryContent';

function GridGallery({galleryName}) {
    const images = galleryContent[galleryName] || [];
    const maxImages = images.slice(0, 4);

    return ( 

    <div className="gallery-bloc">
        {maxImages.map((image) => (
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