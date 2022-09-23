import { Container, Divider } from "@mui/material";
import { Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Wrapper from "../../Helpers/Wrapper";


const NewsBanner = () => {

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to='##' style={{ textDecoration: 'none' }}>
                        <Image src='https://th.bing.com/th/id/R.bd16334a0c7a95f000e3b907f0b951ba?rik=h6VkHH7aQ1y6ew&pid=ImgRaw&r=0' alt='the_witcher' style={{ maxWidth: '100%' }} />
                        <div className='text-center text-black'>
                            <h1>THE WITCHER</h1>
                            <h4>
                                <Divider>
                                    ROLE-PLAYING GAME
                                </Divider>
                            </h4>
                            <p style={{ fontFamily: "'Ubuntu Condensed', sans-serif", fontSize: '1.2rem' }}>
                                Become The Witcher, Geralt of Rivia, a legendary monster slayer caught
                                in a web of intrigue womven by forces vying for control of the world. In
                                this debut RPG from CD PROJEKT RED, make difficulties and live with the consequences
                                as you immerse yourself in an extraoridinary dark fantasy tale.
                            </p>
                        </div>
                    </Link>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default NewsBanner;