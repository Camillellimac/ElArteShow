import './ArtistsCarousel.scss';
import { useState } from 'react';
import cardContent from '../Cards/CardBasicContent'; // Importez cardContent depuis CardBasicContent.jsx

function ArtistsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const artistList = Object.entries(cardContent.artistsCardContent).map(([key, value]) => ({
    id: key,
    ...value,
  }));

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === artistList.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? artistList.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className='carousel'>
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {artistList.map((artist, index) => (
          <div key={index} className="slide">
            <div className="carousel-img">
              <img src={artist.image} alt={artist.title} />
            </div>

            <div className="carousel-item">
              <h3>{artist.title}</h3>
              <p className='artist-text'>{artist.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  );
}

export default ArtistsCarousel;
