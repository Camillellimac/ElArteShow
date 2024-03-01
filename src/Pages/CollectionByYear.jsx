import Footer from '../Components/Footer/Footer';
import galleryContent from '../Components/GridGallery/GridGalleryContent';
import GridGalleryForYear from '../Components/GridGallery/GridGalleryForYear';
import Header from '../Components/Header/Header';
import './CollectionByYear.scss';

function CollectionByYear () {
    return (
        <div>
            <Header/>

            <div className="collectionyear-page-container">
                <div className="collectionyear-text-container">
                    <h3>Check our insanes collections<br></br>by <span className="theme-word-year">year</span></h3>
                </div>

                <div className="collectionyear-card-buttons">
                    <div className="buttonsyear-card">
                        <p>The best nourishing food spirit you'll found. Let's review together all of our awesome piece of arts and bring some oceanic and peaceful vibe into your day.</p>                
                    </div>
                </div>
            </div>

            <div className="collectionyear-item-container">
                <div className="collectionyear-card-items">
                    <h3> 2024 </h3>
                    <GridGalleryForYear images={galleryContent} galleryColumns={4} galleryGap='20px' year='2024' />
                </div>

                <div className="collectionyear-card-items">
                    <h3> 2023 </h3>
                    <GridGalleryForYear images={galleryContent} galleryColumns={4} galleryGap='20px' year='2023' />
                </div>
            
                <div className="collectionyear-card-items">
                    <h3> 2022 </h3>
                    <GridGalleryForYear images={galleryContent} galleryColumns={4} galleryGap='20px' year='2022' />
                </div>

                <div className="collectionyear-card-items">
                    <h3> 2021 </h3>
                    <GridGalleryForYear images={galleryContent} galleryColumns={4} galleryGap='20px' year='2021' />
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default CollectionByYear;
