import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Comparison from './pages/Comparison';
import Article from './pages/Article';
import About from './pages/About';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/comparison" element={<Comparison />} />
        <Route path="/article" element={<Article />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;