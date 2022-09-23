import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Col, Container, Row, Card } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";
import { AiFillPlusCircle } from 'react-icons/ai';
import { IconContext } from "react-icons/lib";
import ReviewData from "./ReviewData";


const ReviewCard = () => {

    return (
        <Wrapper>
            <Container>
                <Row>
                    {/* Filter Section */}
                    <hr />
                    <Row style={{ fontFamily: "'Bebas Neue', cursive" }}>
                        <Col sm={7}>
                            Filter by Console
                        </Col>
                        <Col sm={5}>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>PS5</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>XSX</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>PS4</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>XBO</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>PC</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>STADIA</Button>
                            <Button type='submit' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive" }}>
                                ALL
                                <IconContext.Provider value={{ className: 'mx-2', size: '1.2em' }}>
                                    <AiFillPlusCircle />
                                </IconContext.Provider>
                            </Button>
                        </Col>
                    </Row>
                    <hr style={{marginBottom: '2rem'}} />

                    {/* Review Card Section */}
                    {
                        ReviewData.map((review, data) => (
                            <>
                                <Card key={data} className='p-5 mb-3' style={{ border: 'none' }}>
                                    <Row className='g-4'>
                                        <Col sm md={6}>
                                            <Card.Img src={review.image} />
                                        </Col>
                                        <Col sm md={6}>
                                            <Card.Body >
                                                <Card.Title style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontSize: '1.8rem', color: '#9500ae' }}>{review.title}</Card.Title>
                                                <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>{review.description}</Card.Text>
                                                <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>by
                                                    <Link to='##' style={{ textDecoration: 'none', color: '#9500ae' }}>{review.author}</Link>
                                                    on {review.date}
                                                </Card.Text>
                                                {/* <Button>
                                                    READ MORE
                                                    <IconContext.Provider value={{ className: 'mx-2' }}>
                                                        <BsChevronDoubleRight />
                                                    </IconContext.Provider>
                                                </Button> */}
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                                <hr />
                            </>
                        ))
                    }
                    <Button variant='contained' color='secondary' type='submit' style={{ fontFamily: "'Bebas Neue', cursive", marginTop: '2rem' }}>LOAD MORE</Button>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default ReviewCard