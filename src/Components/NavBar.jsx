import React from 'react';
import { Link } from '@reach/router';

const NavBar = () => {
  return (
    <nav>
      <Link className="navlinks" to="/">
        Home
      </Link>

      <Link className="navlinks" to="projects">
        {' '}
        Projects
      </Link>
    </nav>
  );
};

export default NavBar;
