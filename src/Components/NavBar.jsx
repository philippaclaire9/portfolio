import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <Link to="about_me">About Me</Link>
      <Link to="projects"> Projects</Link>
    </nav>
  );
};

export default NavBar;
