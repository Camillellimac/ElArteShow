import './Artists.scss';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HomeTextBloc from "../Components/HomeTexts/HomeTextBloc";
import ArtistsCarousel from '../Components/Carousel/ArtistsCarousel';

function Artists() {
    return (
        <>
            <Header/>

                <div className='artists-page'>
                    <HomeTextBloc contentSubject='artistsPageIntroText'/>
                    <ArtistsCarousel cardArtistName='artistsCardContent'/>
                </div>
                
            <Footer/>
        </>
    )
}

export default Artists; 