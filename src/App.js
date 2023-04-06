
import { Route, Routes } from 'react-router-dom';
import Anime from './Components/Anime';
import Crypto from './Components/Crypto';
import Home from './Components/Home';
import Weather from './Components/Weather';
import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
     <div>
     <Navbar/>
     </div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/navbar' element={<Navbar/>}></Route> 
        <Route path='/anime' element={<Anime/>}></Route>
        <Route path='/weather' element={<Weather/>}></Route>
        <Route path='/crypto' element={<Crypto/>}></Route>


      </Routes>
     
    </div>
  );
}

export default App;
