import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="wcs_header">
      <div className="wcs_header_items">
        <img src="https://i.imgur.com/emFe3O8.jpg" alt="WildCodeSchool logo" />
        <span>search bar</span>
      </div>
      <div className="wcs_header_items">
        <span>location filter</span>
        <span>programming languages filter</span>
      </div>
    </header>
  );
}

export default Header;
