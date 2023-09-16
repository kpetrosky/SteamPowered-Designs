import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VerticalNavBar from './components/VerticalNavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Include the Header component */}
        <VerticalNavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

