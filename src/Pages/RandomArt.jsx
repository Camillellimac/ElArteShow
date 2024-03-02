import React, { useState } from 'react';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import './RandomArt.scss';
import galleryContent from '../Components/GridGallery/GridGalleryContent';
import SpinnerSVG from '../Components/Spinners/SpinnerSVG';

function RandomArt() {
  const [loading, setLoading] = useState(false);
  const [randomArt, setRandomArt] = useState({});
  const [showFirstContainer, setShowFirstContainer] = useState(true);
  const [showButton, setShowButton] = useState(false);

  const getRandomArt = () => {
    setShowFirstContainer(false);
    setLoading(true);
    setTimeout(() => {
      const art = Object.keys(galleryContent);
      const randomArt = art[Math.floor(Math.random() * art.length)];
      const randomArtwork =
        galleryContent[randomArt][
          Math.floor(Math.random() * galleryContent[randomArt].length)
        ];
      setRandomArt(randomArtwork);
      setLoading(false);
      setShowButton(true);
    }, 1500);
  };

  return (
    <>
      <Header />
      <div className="randomart-page-container">
        <div
          className={`randomart-first-container ${
            showFirstContainer ? '' : 'hidden'
          }`}
        >
          <div
            className={`randomart-text-container ${
              loading ? 'hidden' : ''
            }`}
          >
            <h3>Wanna get lost in the art word?</h3>
            <div className="randomart-card-buttons">
              <button onClick={getRandomArt}>I'M ALL IN</button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`randomart-art-item-container ${
          loading ? 'loading' : 'hidden'
        }`}
      >
        <div
          className={`spinner-container ${loading ? 'show' : 'hidden'}`}
        >
          <SpinnerSVG />
        </div>

        <div className="randomart-item-second-container">
          {randomArt.src && !loading && (
            <>
              <img
                src={randomArt.src}
                alt={randomArt.alt}
                style={{ width: '350px', height: '350px' }}
              />
              <div className="random-art-description-container">
                {randomArt.artist && <h3>{randomArt.artist}</h3>}
                {randomArt.name && <p>{randomArt.name}</p>}
                <div className='randomart-buttons-bottom'>
                {showButton && (
                  <button className={`button-add-to-favs ${showButton ? '' : 'hidden'}`}>
                    ADD TO MY FAVS
                  </button>
                )}
                {showButton && (
                  <button className={`button-another-ride ${showButton ? '' : 'hidden'}`}>
                    ANOTHER RIDE
                  </button>
                )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RandomArt;
