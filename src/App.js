import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import About from './pages/About';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Contact from './pages/Contact';

const page = [
  { 
    page: 'About',
    title: 'Training for dogs & their humans, from all walks of life.'
  },
  {
    page: 'Contact',
    title: "Let's get training!"
  },
  {
    page: 'Services',
    title: 'Training Services'
  }
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#6FD1D5", 
      light: "#E5F2F0",
      dark: "#5D9497"
    },
    secondary: {
      main: "#02182B"
    },
    error: {
      main: "#DB504A"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
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
          element={<Services title={page[2].title} />}
        />
        <Route 
          path="/contact"
          element={<Contact title={page[1].title} />}
        />
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
