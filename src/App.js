import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Episode from './pages/Episode';
import AllChar from './pages/AllChar';
import CharEpisodes from './pages/CharEpisodes';

function App() {
  return <div className="App">
{/*   <Navbar></Navbar> */}

  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/episode' element={<Episode />}></Route>
    <Route path='/allcharacters' element={<AllChar />}></Route>
    <Route path='/charactersepisode/:id' element={<CharEpisodes/>}></Route>
  </Routes>
  
   
    
   

  </div>;
  
}
export default App;
