import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import AllEpisodes from "./pages/AllEpisodes";
import AllChar from "./pages/AllChar";
import CharEpisodes from "./pages/CharEpisodes";
import EpisodesChar from "./pages/EpisodesChar";

function App() {
  return (
    <div style={{ backgroundColor: "rgb(39, 43, 51)" }}>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<AllChar />} />
          <Route path="/allepisodes" element={<AllEpisodes />} />
          <Route path="/allcharacters" element={<AllChar />} />
          <Route path="/charactersepisode/:id" element={<CharEpisodes />} />
          <Route path="/episodecharacters/:id" element={<EpisodesChar />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
