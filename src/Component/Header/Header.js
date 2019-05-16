import React, {Component} from "react";
import { Button, Col, Collapse, Container, Jumbotron, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Row, InputGroupAddon, InputGroupText, InputGroup,Input } from "reactstrap";



class Header extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" >
          <NavbarBrand href="#home">Wild Tech Profile</NavbarBrand>
        </Navbar>
        <Container>
          <InputGroup>
            <Input />
             <InputGroupAddon addonType="append">
               <InputGroupText>Search</InputGroupText>
             </InputGroupAddon>
           </InputGroup>
        </Container>
        <Jumbotron>
          <Container>
            <Row>
              <Col>
                <h1>Wild Tech Profile</h1>
                <p>
                  <Button
                    tag="a"
                    color="dark"
                    size="large"
                    href="/satellite-status"
                    target="_blank"
                  >
                    Button
                  </Button>
                </p>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
