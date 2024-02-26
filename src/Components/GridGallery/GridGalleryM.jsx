import './GridGalleryM.scss';
import galleryContent from './GridGalleryContent';

function GridGalleryM({ selectedThemes }) {
    const images = selectedThemes.length > 0
        ? Object.values(galleryContent).flatMap(gallery => gallery.filter(image => selectedThemes.includes(image.theme)))
        : Object.values(galleryContent).flatMap(gallery => gallery);

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
    );
}

export default GridGalleryM;
