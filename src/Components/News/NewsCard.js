import { Container, Button } from "@mui/material";
import { Row, Col, Card } from "react-bootstrap";
import { IconContext } from 'react-icons/lib';
import {BsChevronDoubleRight} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import Wrapper from "../../Helpers/Wrapper";
import NewsData from './NewsData';


const NewsCard = () => {

    return (
        <Wrapper>
            <Container>
                <Row style={{ marginTop: '5rem' }}>
                    {
                        NewsData.map(
                            (data, newsFeed) => (
                                <>
                                    <Card key={newsFeed} className='p-5 mb-3' style={{ border: 'none' }}>
                                        <Row className='g-4'>
                                            <Col sm md={6}>
                                                <Card.Img src={data.image} />
                                            </Col>
                                            <Col sm md={6}>
                                                <Card.Body >
                                                    <Card.Subtitle className='mb-3' style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontWeight: 'bold', color: '#9500ae' }}>{data.genre}</Card.Subtitle>
                                                    <Card.Title style={{ fontFamily: "'Ubuntu Condensed', sans-serif", color: '#9500ae', fontSize: '1.8rem' }}>{data.title}</Card.Title>
                                                    <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>{data.description}</Card.Text>
                                                    <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>by
                                                        <Link to='##' style={{ textDecoration: 'none', color: '#9500ae' }}>{data.author}</Link>
                                                        on {data.date}
                                                    </Card.Text>
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
                                    <hr />
                                </>
                            )
                        )
                    }
                    <Button type='submit' variant='contained' color='secondary' style={{ fontFamily: "'Bebas Neue', cursive", marginTop: '2rem' }}>LOAD MORE</Button>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default NewsCard;