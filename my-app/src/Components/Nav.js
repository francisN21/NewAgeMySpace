import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavB = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="/">
          <img
            alt="/"
            src="https://icons.iconarchive.com/icons/alex-t/fresh-fruit/512/watermelon-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Francisco Rones
        </Navbar.Brand>
        <Nav className="mr-auto collapse navbar-collapse justify-content-end">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
        <img
          alt="/"
          src="https://icons.iconarchive.com/icons/alex-t/fresh-fruit/512/watermelon-icon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar>
    </>
  );
};

export default NavB;
