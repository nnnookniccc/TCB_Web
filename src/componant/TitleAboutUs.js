import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar';
import wolfLogo from './../assets/images/wolfLogo.png';
import Nav from 'react-bootstrap/Nav'


function TitleAboutUs(){
    return(
        <div className="title-aboutus-bg">
            <Navbar collapseOnSelect expand="lg" variant="dark" className="px-5">
            <Navbar.Brand href="#home"><img src={wolfLogo} style={{width:144, height: 36}} className="ml-xs-2 ml-md-5"/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="navbar-font">
                        <Nav.Link href="#" className="pr-lg-4">HOME</Nav.Link>
                        <Nav.Link href="#" className="pr-lg-4">ABOUT US</Nav.Link>
                        <Nav.Link href="#" className="pr-lg-4">PRODUCT</Nav.Link>
                        <Nav.Link href="#" className="pr-lg-4">WOLF'S TALK</Nav.Link>
                        <Nav.Link href="#" className="pr-lg-4">CLIENTS</Nav.Link>
                        <Nav.Link href="#" className="pr-lg-4">CONTENT</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default TitleAboutUs ;