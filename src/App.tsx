import React from 'react';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import About from './components/About';
import MarketSchedule from './components/MarketSchedule';
import './App.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './components/Impressum';
// import ProductsList from './components/ProductsList';

const App: React.FC = () => {
    return (
      <Router>
        <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
                
                <div id="carousel">
                    <Carousel />
                </div>
                <div id="about">
                    <About />
                </div>
                <div className="section-divider"></div>
                <div id="market-schedule">
                    <MarketSchedule />
                </div>
                {/* <div className="section-divider"></div>
                <div id="products">
                    <ProductsList />
                </div> */}
                <div className="section-divider"></div>
                <div id="contact">
                <Contact />
                </div>
            </>
          } />
          <Route path="/impressum" element={<Impressum />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
};

export default App;
