import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from 'react-icons/ai'
import React, { useContext } from 'react';
import AuthContext from './Context/auth-context';
import { Button } from '@mui/material';
import { IconContext } from 'react-icons/lib';



const NavbarTab = () => {

    const authCtx = useContext(AuthContext);

    return (

        <Navbar collapseOnSelect expand="lg" className='p-2'>
            <Container>
                <Link to='/' className='navbar-brand' style={{ fontFamily: "'Bebas Neue', cursive", color: '#9c27b0' }}>ENDGAME</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ borderColor: '#9c27b0' }}>
                    <IconContext.Provider value={{ color: '#9c27b0'}}>
                        <AiFillPlusCircle />
                    </IconContext.Provider>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto align-self-center d-flex" style={{ fontFamily: "'Bebas Neue', cursive" }}>
                        <Link to='/' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link'>Home</Link>
                        <Link to='/review' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link'>Reviews</Link>
                        <Link to='/news' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link'>News</Link>
                        <Link to='/features' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link'>Features</Link>
                    </Nav>
                        
                    {
                        authCtx.isLoggedIn ?
                            (
                                <Nav>
                                    <Button variant="contained" color='secondary' onClick={authCtx.onLogout}>Log Out</Button>
                                </Nav>
                            )   :
                            (
                                <Nav>
                                    <Link to='/join' className='nav-link'>
                                        <Button variant='contained' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>JOIN</Button>
                                    </Link>
                                    <Link to='/log_in' className='nav-link'>
                                        <Button variant='contained' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>LOGIN</Button>
                                    </Link>
                                </Nav>
                            )
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

};

export default NavbarTab;