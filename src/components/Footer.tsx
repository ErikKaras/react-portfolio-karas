import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
      <div className="social-links">
        <a href="https://github.com/ErikKaras" target="_blank" rel="noreferrer">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/erikkaras" target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>© Copyright 2024 Erik Karas</p>
    </footer>
  );
}

export default Footer;
