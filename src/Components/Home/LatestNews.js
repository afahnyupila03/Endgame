import { Button } from "@mui/material";
import { Container } from "@mui/system";
import { Card, Col, Row } from "react-bootstrap";
import { IconContext } from "react-icons";
import { BsChevronDoubleRight } from 'react-icons/bs';
import Wrapper from "../../Helpers/Wrapper";
import LatestData, { TrendingData } from "./LatestData";
import { Link } from 'react-router-dom';


const LatestNews = () => {

    return (
        <Wrapper>
            <Container style={{ marginBottom: '8rem' }}>
                <Row>
                    <Col sm={8}>
                        <h2 style={{ fontFamily: "'Bebas Neue', cursive" }}>LATEST NEWS</h2>
                        <div className='mt-5 mb-5'>
                            <Button variant="contained" className='mx-1 mb-2' color="secondary" style={{ fontFamily: "'Bebas Neue', cursive" }}>Racing</Button>
                            <Button variant="contained" className='mx-1 mb-2' color="secondary" style={{ fontFamily: "'Bebas Neue', cursive" }}>Shooters</Button>
                            <Button variant="contained" className='mx-1 mb-2' color="secondary" style={{ fontFamily: "'Bebas Neue', cursive" }}>Strategy</Button>
                            <Button variant="contained" className='mx-1 mb-2' color="secondary" style={{ fontFamily: "'Bebas Neue', cursive" }}>Online</Button>
                        </div>

                        {
                            LatestData.map((latest, latestdata) => (
                                <Card key={latestdata} className='p-3' style={{ border: 'none', marginBottom: '6rem' }}>
                                    <Row className='g-4'>
                                        <Col sm md={6}>
                                            <Card.Img src={latest.image} />
                                        </Col>
                                        <Col sm md={6}>
                                            <Card.Body >
                                                <Card.Subtitle style={{ fontFamily: "'Teko', sans-serif" }} className='mb-3'>11.11.18 / in <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}> Games</Link></Card.Subtitle>
                                                <Card.Title style={{ fontFamily: "'Teko', sans-serif" }}>The best online game is out now!</Card.Title>
                                                <Card.Text style={{ fontFamily: "'Teko', sans-serif" }}>{latest.description}</Card.Text>
                                                <Button color='secondary'>
                                                    READ MORE
                                                    <IconContext.Provider value={{ className: 'mx-2' }}>
                                                        <BsChevronDoubleRight />
                                                    </IconContext.Provider>
                                                </Button>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            ))
                        }
                    </Col>
                    <Col sm={4}>
                        <h2 className='mb-4' style={{ fontFamily: "'Bebas Neue', cursive" }}>TRENDING</h2>

                        {/* Trending Space */}
                        <Row>
                            {
                                TrendingData.map(
                                    ( games , trending ) => (
                                        <Card key={trending} className='mb-3 p-2' style={{ border: 'none' }}>
                                            <Row className="g-4">
                                                <Col sm md={5}>
                                                    <Card.Img src={games.image} />
                                                </Col>
                                                <Col sm md={7}>
                                                    <Card.Body style={{ fontFamily: "'Teko', sans-serif" }}>
                                                        <Card.Subtitle className='mb-1'>11.11.18 / in <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}>Games</Link> </Card.Subtitle>
                                                        <Card.Title style={{ fontSize: '1rem' }}>The best online game is out now!</Card.Title>
                                                    </Card.Body>
                                                </Col>
                                            </Row>
                                        </Card>
                                    )
                                )
                            }
                        </Row>

                        {/* Categories Space */}
                        <Row>
                            <Card className='p-3 text-center' style={{border: 'none'}}>
                                <h2 style={{ fontFamily: "'Bebas Neue', cursive" }}>CATEGORIES</h2>

                                <div className='mt-3'>
                                    <ul className='navbar-nav' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                                        <li className="nav-item mt-2">
                                            <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}><h4>Games</h4></Link>
                                        </li>
                                        <li className="nav-item mt-2">
                                            <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}><h4>Gaming Tips &amp; Tricks</h4></Link>
                                        </li>
                                        <li className="nav-item mt-2">
                                            <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}><h4>Online Games</h4></Link>
                                        </li>
                                        <li className="nav-item mt-2">
                                            <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}><h4>Community</h4></Link>
                                        </li>
                                        <li className="nav-item mt-2">
                                            <Link to='/' style={{ textDecoration: 'none', color: '#9500ae' }}><h4>Uncategorized</h4></Link>
                                        </li>
                                    </ul>
                                </div>

                            </Card>
                        </Row>

                        {/* Super Offer */}
                        <Row>
                            <Card.Img src='https://preview.colorlib.com/theme/endgam/img/xadd.jpg.pagespeed.ic.8sq9LiuLxW.webp' className='mt-5' />
                        </Row>

                    </Col>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default LatestNews;