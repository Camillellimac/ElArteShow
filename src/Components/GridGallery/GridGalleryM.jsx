import './GridGalleryM.scss';
import galleryContent from './GridGalleryContent';
import GridEmpty from './GridEmpty';

function GridGalleryM({ selectedThemes }) {
    const images = selectedThemes.length > 0
        ? Object.values(galleryContent).flatMap(gallery => gallery.filter(image => selectedThemes.includes(image.theme)))
        : [];

    return (
        <div className="gallery-bloc-m">
            {images.length > 0 ? images.map((image) => (
                <article key={image.id}>
                    <div className="gallery-item-m">
                        <img src={image.src} alt={image.alt} />
                    </div>
                </article>
            )) : (
                <GridEmpty />
            )}
        </div>
    );
}

export default GridGalleryM;

