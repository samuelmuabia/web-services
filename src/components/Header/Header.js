import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { LinkContainer } from 'react-router-bootstrap';
import auth from '../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand >Web Solution</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
                        <Nav   >
                            <LinkContainer to="/home">
                                <Nav.Link >Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/home#services" >
                                <Nav.Link  >Services</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="home#works">
                                <Nav.Link >Works</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/blog">
                                <Nav.Link >Blog</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/About">
                                <Nav.Link >About</Nav.Link>
                            </LinkContainer>
                            {
                                user ?
                                    <button className='btn btn-primary' onClick={handleSignOut}>sign out</button>
                                    :
                                   <LinkContainer to="/login">
                                    <Nav.Link >Login</Nav.Link>
                                </LinkContainer>
                                }
                            {
                                user ? "": <LinkContainer to="/signup">
                                <Nav.Link >Sign Up</Nav.Link>
                            </LinkContainer>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;