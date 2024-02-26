import './GridGalleryM.scss';
import galleryContent from './GridGalleryContent';


function GridGalleryM ({galleryName}) {
    const images = galleryContent[galleryName] || [];

    return ( 

    <div className="gallery-bloc--m">
        {images.map((image) => (
            <article key={image.id}>
                <div className="gallery-item--m">
                    <img src={image.src} alt={image.alt} />
                </div>
            </article>
        ))}
    
    </div>
    )
}

export default GridGalleryM;