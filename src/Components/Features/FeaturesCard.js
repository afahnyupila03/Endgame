import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Wrapper from "../../Helpers/Wrapper";
import FeaturesData from './FeaturesData';
import { Button } from '@mui/material';


const FeaturesCard = () => {

    return (
        <Wrapper>
            <Container>
                <Row style={{ marginTop: '5rem' }}>
                    {
                        FeaturesData.map(
                            (data, features) => (
                                <>
                                    <Card key={data} className='p-5 mb-3' style={{ border: 'none' }}>
                                        <Row className='g-4'>
                                            <Col sm md={6}>
                                                <Card.Img src={features.image} />
                                            </Col>
                                            <Col sm md={6}>
                                                <Card.Body >
                                                    <Card.Subtitle className='mb-3' style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontWeight: 'bold', color: '#9500ae' }}>{features.genre}</Card.Subtitle>
                                                    <Card.Title style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontSize: '1.8rem', color: '#9500ae' }}>{features.title}</Card.Title>
                                                    <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>{features.description}</Card.Text>
                                                    <Card.Text style={{ fontFamily: "'Teko', sans-serif", fontSize: '1.2rem' }}>by
                                                        <Link to='##' style={{ textDecoration: 'none', color: '#9500ae' }}>{features.author}</Link>
                                                        on {data.date}
                                                    </Card.Text>
                                                </Card.Body>
                                            </Col>
                                        </Row>
                                    </Card>
                                    <hr />
                                </>
                            )
                        )
                    }
                    <Button variant='contained' color='secondary' type='submit' style={{ fontFamily: "'Bebas Neue', cursive", marginTop: '2rem' }}>LOAD MORE</Button>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default FeaturesCard;