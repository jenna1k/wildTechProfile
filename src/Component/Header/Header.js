import React, { Component } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from 'reactstrap';
// import DropdownTreeSelect from 'react-dropdown-tree-select'
// import 'react-dropdown-tree-select/dist/styles.css'

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" fixed="top" className="wcs-header">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar className="wcs-header-items">
              <div className="wcs-header-searchfilter">
                <img
                  src="https://i.imgur.com/emFe3O8.jpg"
                  alt="WildCodeSchool logo"
                  className="wcs-header-img"
                />
                <NavItem className="m-2">
                  <SearchBar
                    search={this.props.search}
                    searchClick={this.props.searchClick}
                    searchChange={this.props.searchChange}
                  />
                </NavItem>
              </div>
              <div className="wcs-header-searchfilter">
                {/* <DropdownTreeSelect data='Germany' onChange={this.searchChange} placeholderText="Location"/> */}
                <NavItem className="m-2">location filter</NavItem>
                <NavItem className="m-2">programming languages filter</NavItem>
                <Button tag="a" color="dark" size="medium" href="" target="_blank" className="m-2">
                  Filter results
                </Button>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
