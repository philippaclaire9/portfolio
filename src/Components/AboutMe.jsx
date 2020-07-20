import React from 'react';
import philippa_photo from '../philippa_photo.jpg';
//import { Link } from '@reach/router';

const PreviousExperience = () => {
  return (
    <main>
      <img className="philippa" src={philippa_photo} alt="Philippa" />
      <p>
        Hi there! I'm Philippa, a recent graduate of Northcoders Coding
        Bootcamp. I am a full stack developer based in York. Have a browse
        through my projects. I'll continually update these as they develop.
      </p>
      <p>Tech</p>
      <p>
        Main language: JavaScript Front end: React.js, HTML, CSS, Styled
        Components, Material UI Back end: Node.js, Express, PostgreSQL Testing:
        Jest, Mocha, Chai
      </p>

      {/* <Link to="previous_experience">
        <button>Previous Experience</button>
      </Link> */}
    </main>
  );
};

export default PreviousExperience;
