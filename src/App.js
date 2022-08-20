import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<Nav />}
        />
      </Routes>
    </Router>
  );
}

export default App;
