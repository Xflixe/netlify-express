import React from "react";
// import {Navbar as BootstrapNavbar} can't have same names, either use alias like this or rename the component
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar
      bg="light gradient"
      expand="sm"
      className="d-flex justify-content-between p-3 px-md-5"
    >
      <Navbar.Brand as={Link} to="/">
        Mini Drive
      </Navbar.Brand>
      <Nav>
        <Nav.Link as={Link} to="/user">
          Profile
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}
