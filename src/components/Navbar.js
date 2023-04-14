import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, Button, Modal } from "react-bootstrap";

const NavbarSection = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="navbarSection shadow-sm fixed-top">
      <Navbar collapseOnSelect expand="lg" bg="white">
        <Container>
          <Navbar.Brand className="title" href="#home">
            ZenLib
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="nav ms-auto text-center" style={{}}>
              <Nav.Link href="#hero" onClick={() => navigate("/")}>
                Home
              </Nav.Link>
              <Nav.Link href="#about" onClick={() => navigate("/")}>
                About Us
              </Nav.Link>
              <Nav.Link href="#information" onClick={() => navigate("/")}>
                Information
              </Nav.Link>
              <Nav.Link href="#popular" onClick={() => navigate("/")}>
                Popular
              </Nav.Link>
              <Nav.Link
                style={{
                  gap: "10px",
                  fontSize: "16px",
                  color: "rgba(112, 0, 255, 1)",
                  fontWeight: "500",
                }}
                href="#pricing"
              >
                Sign Up
              </Nav.Link>
              <Button
                className="btn-login"
                isOpen={openDialog}
                setIsOpen={setOpenDialog}
              >
                Login
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSection;
