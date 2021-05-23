import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <div className="about-txt">
        <p>"Share Anything about Anything!"</p>
        <p>
          The purpose of this project is to allow people to share or rant about
          anything while staying anonymous or by providing a username.
        </p>

        <p>This project is also for learning full-stack development.</p>

        <p>Created by Josh Daniel Bañares.</p>
      </div>
      <Link to="/">go back</Link>
    </div>
  );
}

export default About;
