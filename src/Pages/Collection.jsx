import { useState } from 'react';
import Checkbox from "../Components/Checkbox/Checkbox";
import Footer from "../Components/Footer/Footer";
import GridGalleryM from "../Components/GridGallery/GridGalleryM";
import Header from "../Components/Header/Header";
import './Collection.scss';

function Collection() {
    const [selectedThemes, setSelectedThemes] = useState([]);
    const [selectedYears, setSelectedYears] = useState([]);
  
    const handleCheckboxChange = (value, type) => {
      if (type === 'theme') {
        if (selectedThemes.includes(value)) {
          setSelectedThemes(selectedThemes.filter((selectedTheme) => selectedTheme !== value));
        } else {
          setSelectedThemes([...selectedThemes, value]);
        }
      } else if (type === 'year') {
        if (selectedYears.includes(value)) {
          setSelectedYears(selectedYears.filter((selectedYear) => selectedYear !== value));
        } else {
          setSelectedYears([...selectedYears, value]);
        }
      }
    };
  
    return (
      <>
        <Header />
        <div className="collection-page-container">
          <div className="collection-text-container">
            <h3>Check our insanes collections</h3>
            <p>We'd love to hear from you. Send us a message, and we'll get back to you in a reasonable timeframe.</p>
          </div>
          <div className="collection-card-buttons">
            <div className="buttons-card">
              <h4>All collections</h4>
              <button>Year</button>
              <p>by</p>
              <button>Theme</button>
            </div>
          </div>
        </div>
        <div className="collection-item-container">
          <div className="checkbox-left">
            <Checkbox onChange={handleCheckboxChange} />
          </div>
          <div className="card-items-right-m">
            <GridGalleryM selectedThemes={selectedThemes} selectedYears={selectedYears} />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  export default Collection;
