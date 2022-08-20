import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Contact from './pages/Contact';

const page = [
  { 
    page: 'About',
    title: 'Training for dogs & their humans, from all walks of life.'
  }
];

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
          element={<About title={page[0].title} />}
        />
        <Route 
          path="/services"
          element={<Services title="Services" />}
        />
        <Route 
          path="/contact"
          element={<Contact title="Contact" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
