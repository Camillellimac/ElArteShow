import './GridGallery.scss'
import galleryContent from './GridGalleryContent';

function GridGallery({ galleryName, galleryColumns = 2, galleryGap = '20px' }) {
    const images = galleryContent[galleryName] || [];
    const maxImages = images.slice(0, 32);

    return ( 

    <div className="gallery-bloc" style={{ gridTemplateColumns: `repeat(${galleryColumns}, 1fr)`, gap: galleryGap }}>
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
