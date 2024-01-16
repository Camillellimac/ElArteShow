import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/HomePage';
import Artists from './Pages/Artists';
import ArtLovers from './Pages/ArtLovers';
import MyAccount from './Pages/MyAccount';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage/>}/>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/artlovers" element={<ArtLovers/>}/>
          <Route path="/myaccount" element={<MyAccount/>}/>


        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
