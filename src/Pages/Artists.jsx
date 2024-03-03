import './Artists.scss';
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ArtistsCarousel from '../Components/Carousel/ArtistsCarousel';

function Artists() {
    return (
        <>
            <Header/>

                <div className='artists-page'>
                    <ArtistsCarousel cardArtistName='artistsCardContent'/>
                </div>
                
            <Footer/>
        </>
    )
}

export default Artists; 