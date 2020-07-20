import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <Link className="navlinks" to="about_me">
        About Me
      </Link>

      <Link className="navlinks" to="projects">
        {' '}
        Projects
      </Link>

      <Link className="navlinks" to="/">
        Home
      </Link>
    </nav>
  );
};

export default NavBar;
