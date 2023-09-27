import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Truth from "../../assets/images/true.png";

export default function MyNavbar(): React.JSX.Element {
  return (
    <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/">
          <img src={Truth} className="img-fluid" alt="Logo" width="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
