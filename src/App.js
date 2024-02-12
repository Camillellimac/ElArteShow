import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/HomePage';
import Artists from './Pages/Artists';
import ArtistPortfolio from './Pages/ArtistPortfolio';
import ArtLovers from './Pages/ArtLovers';
import MyAccount from './Pages/MyAccount';
import MyFavsOnes from './Pages/MyFavsOnes';
import About from './Pages/About';
import Contact from './Pages/Contact';
import SignOnForm from './Pages/SignOnForm';
import CollectionByYear from './Pages/CollectionByYear';
import CollectionByTheme from './Pages/CollectionByTheme';
import RandomArt from './Pages/RandomArt';
import Blog from './Pages/Blog';


function App() {
  return (

      <div>

        <BrowserRouter>
          <Routes>

              <Route path="/" element={<Homepage/>}/>

              <Route path="/artlovers" element={<ArtLovers/>}/>
              <Route path="/artists" element={<Artists/>}/>
              <Route path="/artists/portfolio" element={<ArtistPortfolio/>}/>
              <Route path='/random' element={<RandomArt/>}/>

              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path="/myaccount" element={<MyAccount/>}/>
              <Route path='/signon' element={<SignOnForm/>}/>

              <Route path='/collectionyear202X' element={<CollectionByYear/>}/>
              <Route path='/collectionthemeXXX' element={<CollectionByTheme/>}/>
              <Route path="/myfavsones" element={<MyFavsOnes/>}/>
              <Route path='/blog' element={<Blog/>}/>


          </Routes>
        </BrowserRouter>
        
      </div>


  );
}

export default App;
