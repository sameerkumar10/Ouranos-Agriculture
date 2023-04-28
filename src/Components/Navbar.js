import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../images/Logo.png";
import "./Navbar.css";

const Menu = () => {
  return (
    <div className="bg" >
      <div style={{ backgroundColor:"rgba(0, 0, 0, 0.5)"}} >
      <Navbar collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="logo" style={{ height: "50px",opacity:3 }}/>  </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
          <Nav.Link href="#home" style={{fontSize:"20px",color:"white"}}>Home</Nav.Link>
              <Nav.Link href="#Product" style={{fontSize:"20px",color:"white"}}>Product</Nav.Link>
              <Nav.Link href="#AboutUs" style={{fontSize:"20px",color:"white"}}>About Us</Nav.Link>
              <Nav.Link href="#Support" style={{fontSize:"20px",color:"white"}}>Support</Nav.Link>
              <Nav.Link href="#Blog" style={{fontSize:"20px",color:"white"}}>Blog</Nav.Link>
            
          </Nav>
          <Nav>
          <Nav className="mt-3">
              <h2
                className="btn btn-success"
                style={{
                  borderRadius: "20px",
                  width: "150px",
                  fontWeight: "bold",
                }}
              >
                Buy now
              </h2>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
      <div
        style={{
          width: "100%",
          color: "#fff",
          marginTop: "170px",
          textAlign: "center",
        }}
      >
        
        <h1  className="extra"  style={{ fontSize: "55px", fontWeight: "bold"}}>
          Transforming Agriculture with Technology  
        </h1>
        <h5  style={{ fontSize: "21px", fontWeight: "bold" }}>
          Revolutionizing Agriculture through Innovation: Explore the Latest
          Trends and Technologies in Agri-Tech with Ouranos Robotics' Leading
          Blog
        </h5>
      </div>
    </div>
  );
};

export default Menu;
