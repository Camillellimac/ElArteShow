import './HomePage.scss'
import Header from '../Components/Header/Header';
import Footer from '../Components//Footer/Footer';
import HomeImgBloc from '../Components/HomeImgs/HomeImgBloc';
import HomeTextBloc from '../Components/HomeTexts/HomeTextBloc';
import GridGallery from '../Components/GridGallery/GridGallery';
import CardBasic from '../Components/Cards/CardBasic';
import nightTheme from '../Components/DayNightToggle/DayNightToggle';


function Homepage() {

    return (
        <div className={nightTheme}>
            <Header/>

                <HomeImgBloc />


                <HomeTextBloc contentSubject='introText'/>

                <GridGallery galleryName='botanic'/>
                <HomeTextBloc contentSubject='flowerText'/>

                <GridGallery galleryName='ocean'/>
                <HomeTextBloc contentSubject='oceanText'/>
                
                <GridGallery galleryName='nature'/>
                <HomeTextBloc contentSubject='randomText'/>


                <HomeImgBloc />

                <HomeTextBloc contentSubject='artsurfText'/>
                <CardBasic cardSubject='homepageCardContent' />


            <Footer/>
      </div>
    )
}

export default Homepage;