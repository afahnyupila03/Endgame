import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { BsYoutube, BsFacebook } from 'react-icons/bs'
import { Link } from "react-router-dom";
import Wrapper from "./Helpers/Wrapper";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { IconContext } from "react-icons";


const  Footer = () => {

    return (
        <Wrapper>
            <Container fluid style={{ padding: '5rem', marginTop: '10rem' }}>
                <hr className='mb-4' />
                <Container>
                {/* Banner */}
                    <Row>
                        <Col className="m-auto align-self-center d-flex mt-4">
                            <Link to='/' className='navbar-brand m-auto align-self-center d-flex'>
                                <h1 style={{ fontFamily: "'Bebas Neue', cursive", color: '#9c27b0' }}>ENDGAME</h1>
                            </Link>
                        </Col>
                    {/* Nav Links */}
                        <Col className='m-auto align-self-center d-flex'>
                            <Nav className='m-auto align-self-center d-flex mt-4' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                                <Link to='/' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link mt-2 m-auto align-self-center d-flex mx-2'>
                                    Home
                                </Link>
                                <Link to='/review' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link mt-2 m-auto align-self-center d-flex mx-2'>
                                    Reviews
                                </Link>
                                <Link to='/news' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link mt-2 m-auto align-self-center d-flex mx-2'>
                                    News
                                </Link>
                                <Link to='/features' style={{ color: '#9c27b0', fontSize: '1.2rem', fontWeight: 'bold' }} className='nav-link mt-2 m-auto align-self-center d-flex mx-2'>
                                    Features
                                </Link>
                            </Nav>
                        </Col>
                    {/* Media Links */}
                        <Col className='text-center d-flex mt-4' >
                            <IconContext.Provider value={{ className: 'mx-3 m-auto align-self-center d-flex', size: '2em', color: '#1DA1F2' }}>
                                <AiFillTwitterCircle />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ className: 'mx-3 m-auto align-self-center d-flex', size: '2em', color: '#4267B2' }}>
                                <BsFacebook />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ className: 'mx-3 m-auto align-self-center d-flex', size: '2em', color: '#262626' }}>
                                <AiFillInstagram />
                            </IconContext.Provider>
                            <IconContext.Provider value={{ className: 'mx-3 m-auto align-self-center d-flex', size: '2em', color: '#FF0000' }}>
                                <BsYoutube />
                            </IconContext.Provider>
                        </Col>
                    </Row>
                    {/* Footer Text */}
                    <Row>
                        <Col>
                            <hr style={{ marginTop: '5rem' }} />
                            <p className='text-center mt-4' style={{ fontFamily: "'Bebas Neue', cursive", marginTop: '3rem' }}>
                                <span style={{ color: '#9500ae' }}>&copy;</span>1991 to {new Date().getFullYear()} <Link to='/' style={{ textDecoration: 'none', color: '#9500ae'}}>ENDGAME</Link>. All Rights Reserved.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </Wrapper>
    );

};

export default Footer;