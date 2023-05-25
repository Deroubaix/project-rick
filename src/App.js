import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import AllEpisodes from './pages/AllEpisodes';
import AllChar from './pages/AllChar';
import CharEpisodes from './pages/CharEpisodes';
import EpisodesChar from './pages/EpisodesChar';

function App() {
  return <div className="App">
  <Navbar></Navbar>

  <Routes>
    <Route path='/allepisodes' element={<AllEpisodes />}></Route>
    <Route path='/allcharacters' element={<AllChar />}></Route>
    <Route path='/charactersepisode/:id' element={<CharEpisodes/>}></Route>
    <Route path='/episodecharacters/:id' element={<EpisodesChar/>}></Route>
  </Routes>
  
  </div>;
  
}
export default App;
