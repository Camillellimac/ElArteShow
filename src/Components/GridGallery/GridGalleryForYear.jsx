import React, { useState } from 'react';
import './GridGallery.scss';
import galleryContent from './GridGalleryContent';

function GridGalleryForYear({ galleryColumns, galleryGap, year }) {
    const [renderedImageIds, setRenderedImageIds] = useState(new Set());

    const images = [...galleryContent.botanic, ...galleryContent.nature, ...galleryContent.ocean];

    const filterImagesByYear = (images, year) => {
        return images.filter(image => image.year === year);
    };

    const handleRenderedImage = (id) => {
        setRenderedImageIds(new Set(renderedImageIds.add(id)));
    };

    return (
        <div className="gallery-bloc">
            {filterImagesByYear(images, year).map((image) => (
                !renderedImageIds.has(image.id) && (
                    <article key={image.id} onClick={() => handleRenderedImage(image.id)}>
                        <div className="gallery-item">
                            <img src={image.src} alt={image.alt} />
                        </div>
                    </article>
                )
            ))}
        </div>
    );
};

export default GridGalleryForYear;
