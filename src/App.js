import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import Main from './components/pages/Main'

function App() {
  return (
    <>
    <Router>
      <Navbar />
    </Router>
    <Main />
    </>
  );
}

export default App;
