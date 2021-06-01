import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Project:SKL Beta!</h1>
      <h3>Copyright © 2021 88XFi Websites All Rights Reserved.</h3>
      <div className="navigation">
        <motion.a whileHover={{ rotate: 360 }}>
          <Link to="/about">about</Link>
        </motion.a>
        <motion.a
          whileHover={{ rotate: 360 }}
          href="https://xfi.sytes.net"
          rel="author noreferrer"
          target="_blank"
        >
          portfolio
        </motion.a>
        <motion.a
          whileHover={{ rotate: 360 }}
          href="https://github.com/joshbanares/project-skl"
          rel="author noreferrer"
          target="_blank"
        >
          github
        </motion.a>
      </div>
    </nav>
  );
}

export default Navbar;
