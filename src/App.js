// App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from './components/Header';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import VerticalNavBar from './components/VerticalNavBar';
import './components/VerticalNavBar.css'; // Import the CSS file for VerticalNavBar


function App() {
  return (
    <Router> {/* Wrap your components with the Router */}
      <div className="App">
        <VerticalNavBar />
        <Header />
        <main>
          <Home />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
