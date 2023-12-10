import React, {useState} from 'react';
import {Navbar, Nav, Button, Container, Modal, Form} from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LoginModal from "./LoginModal";

const Styles = styled.div`
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #ADB1B8;
    &:hover {
      color: white;
    }
  }

  .ml-auto {
    margin-left: auto !important;
    padding-left: 10px;
  }
  
  .mr-2 {
    margin-right: 5px ;
  }
`

const Navibar = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const user = true

    return (
        <Styles>
            <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand>WebDev blog</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='mr-auto'>
                            {user ?
                                <>
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                                <Nav.Link as={Link} to='/users'>Users</Nav.Link>
                                <Nav.Link as={Link} to='/about'>About</Nav.Link>
                                </>
                            :
                                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            }
                        </Nav>
                        <Nav className="ml-auto">
                            {user ?
                                <Button variant='primary' onClick='handleShow'>Sign out</Button>
                            :
                                <Button variant='primary' className='mr-2' onClick={handleShow}>Log in</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal handleClose={handleClose} show={show} />

        </Styles>
    );
};

export default Navibar;
