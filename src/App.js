import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import VerticalNavbar from './components/VerticalNavBar';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Services from './components/pages/Services';
import About from '../src/components/pages/About';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content-wrapper">
          <VerticalNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
