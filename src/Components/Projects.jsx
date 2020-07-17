import React from 'react';
import YouTube from 'react-youtube';
import StyledVideo from './StyledVideo';
import '../projects.css';

const Projects = () => {
  return (
    <main>
      <section className="projects">
        <header>
          <h2>Projects</h2>
        </header>

        <h3>Northcoders Projects</h3>

        <h4>NC News</h4>

        <p>
          This was an indepenent full stack project building a Reddit-style
          webpage with complete back end. Users are able to access articles,
          write comments when logged in and vote on articles and comments. The
          RESTful API was built using Express, Node.js and PostgreSQL. The front
          end was built with React and CSS along with Styled Components. The
          back end was hosted with Heroku and the front end was deployed with
          Netlify. Testing was completed using Supertest, Mocha, Chai and Jest.{' '}
        </p>
        <ul>
          {' '}
          <li>
            <a
              href="https://github.com/philippaclaire9/backend-review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Back-end github repository
            </a>
          </li>
          <li>
            <a
              href="https://nc-news-review.herokuapp.com/api"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Back-end
            </a>
          </li>
          <li>
            <a
              href="https://github.com/philippaclaire9/fe-nc-news-review"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Front-end github repository
            </a>
          </li>
          <li>
            <a
              href="https://fe-nc-news-review.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              Front-end
            </a>
          </li>
        </ul>
        <h4>MovieMapStar</h4>
        <p>
          This was a group project with 3 other Northcoders students. The
          web-app allows users search movies to find their filming locations on
          a map and plan a route to multiple locations. Users are able to take
          photos of their trip and view them in the app’s gallery. The user
          database was built through AWS with DynamoDB and the camera and
          gallery were built with Expo with the photos stored in S3 buckets. The
          map was built using Google Maps Javascript, Directions, Geolocation
          and Geocoding APIs. Requests were made to the IMDb API to access
          filming location information. Styling was completed with Material UI.
          The entire project was completed remotely.
        </p>
        <a
          href="https://github.com/philippaclaire9/movie-map-star-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Project github repository
        </a>
        <StyledVideo>
          <YouTube
            SameSite="none"
            Secure
            videoId="EqYSThAxRdE"
            className="YouTubeEmbed"
          />
        </StyledVideo>
      </section>
    </main>
  );
};

export default Projects;
