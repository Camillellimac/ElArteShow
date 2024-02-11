import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/HomePage';
import Artists from './Pages/Artists';
import ArtistPortfolio from './Pages/ArtistPortfolio';
import ArtLovers from './Pages/ArtLovers';
import MyAccount from './Pages/MyAccount';
import MyFavsOnes from './Pages/MyFavsOnes';

function App() {
  return (

      <div>

        <BrowserRouter>
          <Routes>

              <Route path="/" element={<Homepage/>}/>

              <Route path="/artists" element={<Artists/>}/>
              <Route path="/artists/portfolio" element={<ArtistPortfolio/>}/>

              <Route path="/artlovers" element={<ArtLovers/>}/>
              <Route path="/myaccount" element={<MyAccount/>}/>

              <Route path="/myfavsones" element={<MyFavsOnes/>}/>


          </Routes>
        </BrowserRouter>
        
      </div>


  );
}

export default App;
