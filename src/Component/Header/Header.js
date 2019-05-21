import React, { Component } from 'react';
import './Header.css';
import SearchBar from './SearchBar';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import techOptions from './data.json';
import FilterLocation from '../Filter/FilterLocation';

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

    //logic for filter
    //parse all students and look in key projects->tech
    //create an array techList
    //upate array with all tech array.push(value.lowercase)
    //remove duplicates
    //create variable option= [{label: "" ,children:[]}]

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
                {/* DropdownTreeSelect for filter function */}
                {/* data will be replaced with json from API */}
                {/* onChange() will be added */}
                <DropdownTreeSelect data={techOptions} placeholderText="Tech experience" />
              </div>
              <div>
                <FilterLocation filterByLocation={this.props.filterByLocation} />
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
