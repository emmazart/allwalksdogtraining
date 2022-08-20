import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Landing />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path="/services"
          element={<Services />}
        />
        <Route 
          path="/contact"
          element={<Contact />}
        />
      </Routes>
    </Router>
  );
}

export default App;
