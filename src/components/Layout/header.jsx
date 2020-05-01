import React, { useState } from "react";
import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
} from "reactstrap";
const Header = styled.header`
  .navbar-collapse > ul {
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2.86px;
    color: #707070;
    text-transform: uppercase;
    opacity: 1;
  }
  .navbar-brand {
    font-size: 40;
    font-weight: bold;
    letter-spacing: 2px;
    color: #112d46;
    text-transform: uppercase;
    opacity: 1;
  }
  .header--icon_user {
    width: 30px;
    height: 30px;
  }
  .header--icon_cart {
    width: 35px;
    height: 50px;
  }
`;
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Header>
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand href="/">Index.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Services
                </DropdownToggle>
                <DropdownMenu center>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Frames
                </DropdownToggle>
                <DropdownMenu center>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/contact">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">GitHub</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-md-5" navbar>
              <NavItem>
                <NavLink href="/components/">
                  <img className="header--icon" src="/assets/user.svg" alt="" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">
                  <img
                    className="header--icon"
                    src="/assets/cart-icon.svg"
                    alt=""
                  />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Header>
  );
};
export default Example;
