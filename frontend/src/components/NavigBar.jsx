import React from 'react';
import logo from '../logo.svg';

import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import {Nav, Navbar,NavDropdown} from 'react-bootstrap'

import Button from '@mui/material/Button';

function NavigBar() {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
          <Navbar.Brand>
            <img src={logo} alt='Logo React' width="30px" height="30px" />{''}
            Logo
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/sncf">SNCF</NavDropdown.Item>
              <NavDropdown.Item href="#products/ratp">RATP</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="#products/ouigo">OUIGO</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#about-us">About-us</Nav.Link>
            <Nav.Link href="#Download">Dowload</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          
        </Navbar>
        <div>
          <Button variant="text">Text</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
         
        </div>
    </div>
    );
  }

export default NavigBar