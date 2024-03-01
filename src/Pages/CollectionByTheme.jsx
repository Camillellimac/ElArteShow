import Footer from '../Components/Footer/Footer';
import GridGallery from '../Components/GridGallery/GridGallery';
import Header from '../Components/Header/Header';
import './CollectionByTheme.scss'

function CollectionByTheme () {
    return (
        <div>
            <Header/>

                <div className="collectiontheme-page-container">
                    <div className="collectiontheme-text-container">
                        <h3>Check our insane collections by theme</h3>
                    </div>

                    <div className="collectiontheme-card-buttons">
                        <div className="buttonstheme-card">
                            <p>The best nourishing food spirit you'll found. Let's review together all of our awesome piece of arts and bring some oceanic and peaceful vibe into your day.</p>                
                        </div>
                    </div>
                </div>

                <div className="collectiontheme-item-container">
                    <div className="collectiontheme-card-items">
                        <h3> Ocean </h3>
                        <GridGallery galleryName='ocean' galleryColumns={4} galleryGap='20px' />
                    </div>

                    <div className="collectiontheme-card-items">
                        <h3> Botanic </h3>
                        <GridGallery galleryName='botanic' galleryColumns={4} galleryGap='20px' />
                    </div>
                
                    <div className="collectiontheme-card-items">
                        <h3> Nature </h3>
                        <GridGallery galleryName='nature' galleryColumns={4} galleryGap='20px' />
                    </div>
                </div>

            <Footer/>
        </div>
    )
}

export default CollectionByTheme;