import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar bg="dark" color='white' expand="lg"  style={{ position:'sticky',top:0,zIndex:22222}}>
            <Container >
                <Navbar.Brand href="#" style={{ color: 'white' }}>Knowledge Cafe</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-white"
                        style={{ maxHeight: '100px' }}
                        navbarScroll >
                    </Nav>
                    <Nav >
                            <Nav.Link href="#action1" style={{color:'white'}}>Home</Nav.Link>
                            <Nav.Link href="#action2" style={{color:'white'}}>About</Nav.Link>
                            <Nav.Link href="#" disabled style={{color:'white', paddingRight:'20px'}}>Blog</Nav.Link>
                            <Nav.Link href="#action2" style={{color:'white'}}>Contact</Nav.Link>
                        </Nav>

                    <Navbar.Brand >
                        <img
                            src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=900&t=st=1680290190~exp=1680290790~hmac=d14f6af6bc9269760ee81163643e488c82379207eb8c00058081bbb5d1c700d0" style={{ borderRadius:'50px' }}
                            width="40" height="40" className="" alt=""
                        />
                        
                    </Navbar.Brand>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;