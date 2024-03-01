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
      }, 1500); // Change this to 3000 (3 seconds)
    };
  
    return (
      <>
        <Header />
        <div
          className={`randomart-first-container ${
            showFirstContainer ? '' : 'hidden'
          }`}
        >
          <div className={`randomart-text-container ${loading ? 'hidden' : ''}`}>
            <h3>Wanna get lost in the art word?</h3>
            <div className="randomart-card-buttons">
              <button onClick={getRandomArt}>I'M ALL IN</button>
            </div>
          </div>
        </div>
        <div
          className={`randomart-art-item-container ${
            loading ? 'loading' : ''
          }`}
        >
          <div className={`spinner-container ${loading ? '' : 'hidden'}`}>
            <SpinnerSVG />
          </div>
          {randomArt.src && !loading && (
            <img
              src={randomArt.src}
              alt={randomArt.alt}
              style={{ width: '350px', height: '350px' }}
            />
          )}
          <div className="random-art-description-container">
            {randomArt.artist && <h3>{randomArt.artist}</h3>}
            {randomArt.name && <p>{randomArt.name}</p>}
          </div>
        </div>
        <Footer />
      </>
    );
  }  

export default RandomArt;
