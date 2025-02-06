import Container from "react-bootstrap/Container";
import styles from "@/components/navbar/styles/navBar.module.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons"; // Example of a "half-show" icon
import {
  faCartShopping,
  faPersonRifle,
  faSearch,
  faSignInAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";

function navBar() {
  // Menu Icons Edit
  const StyledNavLink = styled(Nav.Link)`
    position: relative;
    text-decoration: none;
    color: inherit;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 3px;
      width: 0;
      height: 0.5px;
      background-color: #000;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  `;
  // Icons Styled
  const StyledIcon = styled(FontAwesomeIcon)`
    color: rgb(79, 79, 79);
    font-size: 1em;
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: black;
      transform: scale(1.2);
    }
  `;

  // Toogle Edit Button

  const customStyles = `
        .custom-toggle {
          border: none !important; /* Remove the default border */
          outline: none !important; /* Remove the outline */
          box-shadow: none !important; /* Remove any box shadow */
          padding: 0.5rem; /* Add some padding */
        }
      
        .custom-toggle .navbar-toggler-icon {
          background-image: none; /* Remove the default Bootstrap icon */
        }
      
        .custom-toggle:hover {
          background-color: transparent; /* Remove background on hover */
        }
      `;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = customStyles;
  document.head.appendChild(styleSheet);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={`/images/logo.png`}
            alt={"ForeEver"}
            width={130}
            height={130}
            // Make the image display full width
            style={{
              height: "auto",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggle"
        >
          {/* Replace the default icon with a custom "half-show" icon */}
          <FontAwesomeIcon
            icon={faBarsStaggered}
            style={{ fontSize: "1.5rem", color: "#000" }}
          />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="me-auto d-flex flex-column flex-md-row"
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <div
              className="d-flex flex-column flex-md-row justify-content-center align-items-center"
              style={{
                width: "90%",
                gap: "10px",
                padding: "10px 0",
              }}
            >
              <StyledNavLink href="#home">Home</StyledNavLink>
              <StyledNavLink href="#link">Collection</StyledNavLink>
              <StyledNavLink href="#link">About</StyledNavLink>
              <StyledNavLink href="#link">Contact</StyledNavLink>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "10%",
                gap: "12px",
              }}
            >
              <StyledIcon icon={faSearch} />
              <StyledIcon icon={faUser} />
              <StyledIcon icon={faCartShopping} />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navBar;
