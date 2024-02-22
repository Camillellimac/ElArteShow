import './ArtistsCarousel.scss';
import { useState } from 'react';
import cardContent from '../Cards/CardBasicContent';

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

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= artistList.length) {
      newIndex = artistList.length - 1;
    }
    setCurrentSlide(newIndex);
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

        <div className='carousel-buttons'>

            <div className='inner'>

                <button className='button-arrow' onClick={prevSlide}>
                    <span className="material-symbols-outlined">arrow_back_ios</span>
                </button>

                <div className='indicators'>
                {artistList.map((artist, index) => (
                    <button
                    key={index}
                    className='indicator-buttons'
                    onClick={() => {
                        updateIndex(index);
                    }}
                    >

                        <span
                        className={`material-symbols-outlined ${
                        index === currentSlide ? 'indicator-symbol-active' : 'indicator-symbol'
                        }`}
                        >

                        {index === currentSlide ? 'radio_button_checked' : 'radio_button_unchecked'}
                        </span>
                    </button>
                ))}
                </div>

                <button className='button-arrow' onClick={nextSlide}>
                    <span className="material-symbols-outlined">arrow_forward_ios</span>
                </button>

            </div>
        </div>
    </div>
  );
}

export default ArtistsCarousel;
