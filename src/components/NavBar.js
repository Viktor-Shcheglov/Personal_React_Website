import React, { useState } from 'react';
import "./NavBar.css"
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
  Dropdown,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle1 = () => setDropdownOpen(prevState => !prevState);
  return (
    <div>
      <Navbar class = "test" color="primary" dark expand="lg">
        <NavbarBrand href="/" class="primary"><h3 class="text-white bold" style={{margin:"0px 0px 0px 0px"}}>Viktor Shcheglov</h3></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar style={{margin:"0px 0px -20px 0px"}}>
          <Dropdown isOpen={dropdownOpen} toggle={toggle1}>
              <DropdownToggle color="primary"  caret> 
                Projects
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Will be update soon</DropdownItem>
                <DropdownItem>Algorithm Visualization</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Personal Finance Tracker</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing" target="_blank" ><p class="text-white bold">Resume</p></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Viktor-Shcheglov"><p class="text-white bold">GitHub</p></NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;