import React from "react";
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
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/contacts">Contactos</Nav.Link>
          <Nav.Link href="/products">Loja</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}
