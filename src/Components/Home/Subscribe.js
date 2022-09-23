import { Button, Container, Input, } from "@mui/material";
import Wrapper from "../../Helpers/Wrapper";
import { Row, Col } from 'react-bootstrap';
import FormControl from '@mui/material/FormControl';


const Subscribe = () => {

    return (
        <Wrapper>
            <Container style={{ fontFamily: "'Bebas Neue', cursive" }}>
                <h1 className='text-center' style={{ marginBottom: '5rem', color: '#9c27b0' }}>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <Row className='text-center'>
                    <Col sm className='mb-3'>
                        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                            <Input
                                id="standard-adornment-amount"
                                placeholder="Enter Your E-Mail"
                                style={{
                                    fontFamily: "'Bebas Neue', cursive", 
                                    color: '#9c27b0',
                                    fontSize: '15.rem'
                                }}
                            />
                        </FormControl>
                        <Button variant='contained' color='secondary' type='submit' style={{ fontFamily: "'Bebas Neue', cursive", marginTop: '2rem' }}>SUBSCRIBE</Button>
                    </Col>
                </Row>
                
                
            </Container>
        </Wrapper>
    );

};

export default Subscribe;