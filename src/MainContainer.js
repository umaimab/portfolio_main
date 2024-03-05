import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Work from './pages/work/Work';
import Studio from './pages/work/studio/Studio';
import Alaia from './pages/work/alaia/Alaia';
// import Services from './pages/Services/services';
// import About from './pages/About/about'

const MainContainer = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/studio" element={<Studio />} />
        <Route path="/work/alaia" element={<Alaia />} />
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default MainContainer;