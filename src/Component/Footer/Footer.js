import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <span>
      Made with <i class="fas fa-heart" /> & <i className="fas fa-coffee" /> by{' '}
      <a
        href="https://github.com/jenna1k/wildTechProfile"
        target="_blank"
        className="link color-inherit hover-white">
        Wild
      </a>{' '}
      team
    </span>
  </footer>
);

export default Footer;
