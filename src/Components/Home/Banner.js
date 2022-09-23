import { Button } from "@mui/material";
import { Container } from "react-bootstrap";
import Wrapper from "../../Helpers/Wrapper";

const Banner = () => {

    return (

        <Wrapper>
            <Container fluid style={{
                backgroundImage: "url('https://static2.srcdn.com/wordpress/wp-content/uploads/2021/09/God-of-War-Ragnarok-Kratos-Tyr-Character-Art-Official.jpg')",
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <Container className='text-center p-5'>
                    <h1 style={{ fontFamily: "'Bebas Neue', cursive", color: 'white', marginBottom: '2.5rem', marginTop: '8rem' }}>GAME ON!</h1>
                    <h3 style={{ fontFamily: "'Bebas Neue', cursive", color: 'white', marginBottom: '2.5rem' }}>
                        Fusce erat dui, venenatis et erat in, vulputate dignissim lacus. Donec vitae tempus dolor,
                        sit amet elementum lorem. Ut cursus tempor turpis.
                    </h3>
                    <Button variant="contained" color='secondary' style={{ fontFamily: "'Bebas Neue', cursive", marginBottom: '8rem' }}>READ MORE</Button>
                </Container>
            </Container>
        </Wrapper>

    );

};


export default Banner;