import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap"
import { Link } from "gatsby"

export default class navbar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">All Mirror and Glass</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/custommirrors/">Custom Mirrors</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/showerdoors/">Shower Doors</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/bathaccessories/">Bath Accessories</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/commercialstorefront/">Commercial Storefront</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/ourservices/">Our Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/metalfinishes/">Metal Finishes</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/glasssamples/">Glass Samples</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/links/">Links</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
