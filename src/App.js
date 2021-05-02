import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';

import Navbar from './components/Navbar'
import Main from './components/pages/Main'

function App() {
  return (
    <>
    <Router>
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Navbar />
    </Router>
    <Main />
    </>
  );
}

export default App;
