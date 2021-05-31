import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="about-txt">
        <p>"Share Anything about Anything!"</p>
        <p>
          The aim of this project is to enable people to anonymously share or
          vent about something or anything.
        </p>

        <p>
          This project also serves as a way to learn full-stack development.{' '}
        </p>

        <p>Version: 1.0.1</p>

        <p>Created by Josh Daniel Bañares.</p>
      </div>
      <Link to="/">go back</Link>
    </div>
  );
}

export default About;
