import React from 'react';
import { Router } from '@reach/router';
import AboutMe from './Components/AboutMe';
import NavBar from './Components/NavBar';
import Projects from './Components/Projects';
function App() {
  return (
    <div className="App">
      <p>Philippa's Portfolio Website</p>
      <NavBar />
      <Router>
        <AboutMe path="about_me" />
        <Projects path="projects" />
      </Router>
    </div>
  );
}

export default App;
