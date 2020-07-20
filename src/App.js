import React from 'react';
import { Router } from '@reach/router';
import AboutMe from './Components/AboutMe';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
import Home from './Components/Home';
import './App.css';
import StyledHeader from './Components/StyledHeader';

function App() {
  return (
    <div className="App">
      <StyledHeader>PCB Portfolio</StyledHeader>

      <NavBar />
      <Router>
        <Home path="/" />
        <AboutMe path="about_me" />
        <Projects path="projects" />
      </Router>
    </div>
  );
}

export default App;
