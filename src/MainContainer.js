import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import Work from './pages/Work/work'
// import Services from './pages/Services/services';
// import About from './pages/About/about'

const MainContainer = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        {/* <Route exact path="/services" element={<Services />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};

export default MainContainer;