import React from 'react';
import philippa_photo from '../philippa_photo.jpg';

const Home = () => {
  return (
    <main>
      <img className="philippa" src={philippa_photo} alt="Philippa" />

      <article className="about_me">
        <p>
          Hi there! I'm Philippa, a recent graduate of Northcoders Coding
          Bootcamp. I am a full stack developer based in York. Have a browse
          through my projects. I'll continually update these as they develop.
        </p>
        <h3>Tech</h3>
        <p>
          Main language: JavaScript Front end: React.js, HTML, CSS, Styled
          Components, Material UI Back end: Node.js, Express, PostgreSQL
          Testing: Jest, Mocha, Chai
        </p>
      </article>

      {/* <Link to="previous_experience">
      <button>Previous Experience</button>
    </Link> */}
    </main>
  );
};

export default Home;
