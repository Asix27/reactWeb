import React, {useState, useEffect, useContext} from 'react';
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginModal from "../../LoginModal";
import cl from './Navibar.module.css'
import {ContextAuth} from "../../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navibar = () => {
    const [show, setShow] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {auth} = useContext(ContextAuth)
    const [user] = useAuthState(auth)

    const handleScroll = () => {
        const navbar = document.getElementById('navbar');
        const sticky = navbar.offsetTop;

        if (window.pageYOffset >= sticky) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar id="navbar" sticky="top" className={`${cl.navbar} ${isSticky ? 'sticky' : ''}`} collapseOnSelect expand='lg' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Brand className={cl.navbarBrand}>MEDINA</Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className={cl.navbarNav}>
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
                        <Nav className={cl.navButton}>
                            {user ?
                                <Button variant='outline-warning' onClick={() => auth.signOut()}>Sign out</Button>
                                :
                                <Button variant='outline-warning' className='mr-2' onClick={handleShow}>Log in</Button>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal handleClose={handleClose} show={show} />
        </>
    );
};

export default Navibar;
