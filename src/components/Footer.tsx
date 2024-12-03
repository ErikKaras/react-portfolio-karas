import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/ErikKaras" target="_blank" rel="noreferrer"><GitHubIcon/></a>
      </div>
      <p>© Copyright 2024 Erik Karas   <a href="" target="_blank" rel="noreferrer"></a></p>
    </footer>
  );
}

export default Footer;