import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <span>
      Made with <i class="fas fa-heart" /> & <i class="fas fa-coffee" /> by{" "}
      <a
        href="https://github.com/jenna1k/wildTechProfile"
        target="_blank"
        class="link color-inherit hover-white"
        rel="noopener noreferrer"
      >
        Wild
      </a>{" "}
      team
    </span>
  </footer>
);

export default Footer;
