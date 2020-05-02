import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { comheartLogo } from "../images/imagesUrl";

export default function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">
          <img
            src={comheartLogo}
            width="50"
            height="50"
            className="d-inline-block rounded-circle align-top"
            alt="com heART logo"
          />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/contacts">Contactos</Nav.Link>
          <Nav.Link as={Link} to="/products">Loja</Nav.Link>
          <Nav.Link as={Link} to="/manager">Manager</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
