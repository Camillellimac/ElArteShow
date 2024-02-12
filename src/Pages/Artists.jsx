import './Artists.scss';
import Footer from "../Components/Footer/Footer";
import GridGallery from "../Components/GridGallery/GridGallery";
import Header from "../Components/Header/Header";
import HomeTextBloc from "../Components/HomeTexts/HomeTextBloc";

function Artists() {
    return (
        <>
            <Header/>
                <div className='artists-page'>
                    <h3>Artists</h3>
                    <HomeTextBloc contentSubject='introText'/>
                    <GridGallery galleryName='artistscover' style={{ display: 'grid', width: '50vh', height: '50vh', gridTemplateColumns: 'repeat(1, 1fr)' }} className="artists-grid"/>
                </div>
                
            <Footer/>
        </>
    )
}

export default Artists; 