import ArtistCard from "../Components/Cards/ArtistCard/ArtistCard";
import Footer from "../Components/Footer/Footer";
import GridGalleryXL from "../Components/GridGallery/GridGalleryXL";
import Header from "../Components/Header/Header";

function ArtistPortfolio() {
    return (
        <>
            <Header/>

            <ArtistCard cardArtist='janetmeinkeCardContent' />
            <GridGalleryXL galleryName='botanic'/>

            <Footer/>
        </>
    )
}

export default ArtistPortfolio; 