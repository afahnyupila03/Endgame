import { Button } from "@mui/material";
import { Card, Col, Container, Row } from "react-bootstrap";
import { IconContext } from "react-icons/lib";
import {BsChevronDoubleRight} from 'react-icons/bs'
import Wrapper from "../../Helpers/Wrapper";


const TopSection = () => {

    return (

        <Wrapper>
            <Container className='p-4' style={{ marginTop: '8rem', marginBottom: '8rem' }}>
                <Row>
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{border: 'none'}} className='mb-3'>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', color: '#9500ae' }} className='mb-3'>
                                11.11.18 / in <span>Games</span>
                            </Card.Title>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', fontSize: '2rem' }} className='mb-3'>
                                The best online game is out now!
                            </Card.Title>
                            <Card.Text style={{ border: 'none', fontFamily: "'Teko', sans-serif" }} className='mb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....
                            </Card.Text>
                            <Row className='mt-3'>
                                <Col>
                                    <Button color='secondary'>
                                        READ MORE
                                        <IconContext.Provider value={{ className: 'mx-3' }}>
                                            <BsChevronDoubleRight />
                                        </IconContext.Provider>
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{border: 'none'}} className='mb-3'>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', color: '#9500ae' }} className='mb-2'>
                                11.11.18 / in <span>Playstation</span>
                            </Card.Title>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', fontSize: '2rem' }} className='mb-3'>
                                Top 5 best games in november
                            </Card.Title>
                            <Card.Text style={{ border: 'none', fontFamily: "'Teko', sans-serif" }} className='mb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....
                            </Card.Text>
                            <Row className='mt-3'>
                                <Col>
                                    <Button color='secondary'>
                                        READ MORE
                                        <IconContext.Provider value={{ className: 'mx-3' }}>
                                            <BsChevronDoubleRight />
                                        </IconContext.Provider>
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{ border: 'none' }} className='mb-3'>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', color: '#9500ae' }} className='mb-2'>
                                11.11.18 / in <span>Reviews</span>
                            </Card.Title>
                            <Card.Title style={{ fontFamily: "'Bebas Neue', cursive", border: 'none', fontSize: '2rem' }} className='mb-3'>
                                Get this game at a promo price
                            </Card.Title>
                            <Card.Text style={{ border: 'none', fontFamily: "'Teko', sans-serif" }} className='mb-3'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida....
                            </Card.Text>
                            <Row className='mt-3'>
                                <Col>
                                    <Button color='secondary'>
                                        READ MORE
                                        <IconContext.Provider value={{ className: 'mx-3' }}>
                                            <BsChevronDoubleRight />
                                        </IconContext.Provider>
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </Wrapper>

    );

};

export default TopSection;