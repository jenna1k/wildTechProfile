import React from 'react';
import './Header.css';
import { Button, InputGroupAddon, InputGroupText, InputGroup, Input } from 'reactstrap';

function Header() {
  return (
    <header className="wcs_header">
      <div className="wcs_header_items">
        <img src="https://i.imgur.com/emFe3O8.jpg" alt="WildCodeSchool logo" />
        <InputGroup>
          <Input />
          <InputGroupAddon addonType="append">
            <InputGroupText>Search</InputGroupText>
          </InputGroupAddon>
        </InputGroup>{' '}
      </div>
      <div className="wcs_header_items">
        <span>location filter</span>
        <span>programming languages filter</span>
        <Button tag="a" color="dark" size="large" href="/satellite-status" target="_blank">
          Filter results
        </Button>
      </div>
    </header>
  );
}

export default Header;
