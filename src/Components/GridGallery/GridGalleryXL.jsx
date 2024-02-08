import './GridGalleryXL.scss'
import galleryContent from './GridGalleryContent';

function GridGalleryXL({galleryName}) {
    const images = galleryContent[galleryName] || [];

    return ( 

    <div className="gallery-bloc--xl">
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

export default GridGalleryXL;

