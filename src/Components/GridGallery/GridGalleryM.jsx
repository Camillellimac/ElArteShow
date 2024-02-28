import './GridGalleryM.scss';
import galleryContent from './GridGalleryContent';
import GridEmpty from './GridEmpty';

function GridGalleryM({ selectedThemes, selectedYears }) {
    let images = [];

    if (selectedThemes.length === 0 && selectedYears.length === 0) {
        // Afficher toutes les images si aucun filtre n'est sélectionné
        images = Object.values(galleryContent).flatMap(gallery => gallery);
    } else {
        // Appliquer les filtres en fonction des thèmes et des années sélectionnés
        images = Object.values(galleryContent).flatMap(gallery => gallery.filter(image => {
            const isThemeSelected = selectedThemes.length === 0 || selectedThemes.includes(image.theme);
            const isYearSelected = selectedYears.length === 0 || selectedYears.includes(image.year);
            return isThemeSelected && isYearSelected;
        }));
    }

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
