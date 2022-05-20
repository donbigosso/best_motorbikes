import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import GetStringFromJSON from "../components/GetStringFromJSON";
import PolandFlag from "../images/poland.png";
import GermanyFlag from "../images/germany.png";
import BritainFlag from "../images/union-jack.png";

export default function MyNavbar({
  english,
  german,
  polish,
  home,
  about,
  bikes,
  contact,
  terms,
  ...props
}) {
  const drawEnFalgFrame = () => {
    return props.language === "EN"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawDeFalgFrame = () => {
    return props.language === "DE"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  const drawPlFalgFrame = () => {
    return props.language === "PL"
      ? { border: "2px solid red" }
      : { border: "none" };
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand onClick={home} className="pointer">
        <GetStringFromJSON stringID="home_label" language={props.language} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="pointer" onClick={about}>
            <GetStringFromJSON
              stringID="about_label"
              language={props.language}
            />
          </Nav.Link>

          <NavDropdown
            title={
              <GetStringFromJSON
                stringID="rental_label"
                language={props.language}
              />
            }
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item className="pointer" onClick={bikes}>
              <GetStringFromJSON
                stringID="rental_our_bikes"
                language={props.language}
              />
            </NavDropdown.Item>
            <NavDropdown.Item className="pointer" onClick={terms}>
              <GetStringFromJSON
                stringID="rental_terms"
                language={props.language}
              />
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className="pointer" onClick={contact}>
            <GetStringFromJSON
              stringID="contact_label"
              language={props.language}
            />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="languageField">
        <img
          className="flag"
          src={BritainFlag}
          onClick={english}
          style={drawEnFalgFrame()}
        />
        <img
          className="flag"
          src={GermanyFlag}
          onClick={german}
          style={drawDeFalgFrame()}
        />
        <img
          className="flag"
          src={PolandFlag}
          onClick={polish}
          style={drawPlFalgFrame()}
        />
      </div>
    </Navbar>
  );
}
