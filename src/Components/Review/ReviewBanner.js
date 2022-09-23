import {  } from "@mui/material";
import { Row, Image, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Wrapper from "../../Helpers/Wrapper";


const ReviewBanner = () => {

    return (
        <Wrapper>
            <Container>
                <Row style={{marginBottom: '5rem'}}>
                    <Link to='##' style={{ textDecoration: 'none' }}>
                        <Image
                            src='https://store-images.s-microsoft.com/image/apps.57354.14211614393053975.a4ffed37-2d8b-4964-b012-03eb22bf47cc.d3b3eebb-84f8-4ed6-9ad4-510a47f020c1?mode=scale&q=90&h=1080&w=1920'
                            alt='hell-singer'
                            style={{ maxWidth: '100%' }}
                        />
                        <div className='bannerTex text-black text-center mt-4' style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }} >
                            <h3>Metal: Hellsinger near perfectly combines fast-paced shooting with precise rhythm gameplay that left us ready for what's next with this series.</h3>
                            <h5>by <span> Wesley LeBlanc </span> on Sep 12, 2022 at 12:44 PM</h5>
                        </div>
                    </Link>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default ReviewBanner;