import './Artists.scss';
import Footer from "../Components/Footer/Footer";
import GridGallery from "../Components/GridGallery/GridGallery";
import Header from "../Components/Header/Header";
import HomeTextBloc from "../Components/HomeTexts/HomeTextBloc";
import ArtistCardHorizontal from '../Components/Cards/ArtistCardHorizontal/ArtistCardHorizontal';

function Artists() {
    return (
        <>
            <Header/>
            
                <div className='artists-page'>
                    <HomeTextBloc contentSubject='artistsPageIntroText'/>
                    <ArtistCardHorizontal cardArtistName='artistsCardContent'/>
                </div>
                
            <Footer/>
        </>
    )
}

export default Artists; 