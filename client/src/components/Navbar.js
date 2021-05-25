import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Project:SKL BETA</h1>
      <h3>Copyright © 2021 88XFi Websites All Rights Reserved.</h3>
      <div className="navigation">
        <Link to="/about">about</Link>
        <a href="https://xfi.sytes.net" rel="author noreferrer" target="_blank">
          portfolio
        </a>
        <a
          href="https://github.com/joshbanares/project-skl"
          rel="author noreferrer"
          target="_blank"
        >
          github
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
