import { Container, Row, Image } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Wrapper from "../../Helpers/Wrapper";


const FeatureBanner  = () => {

    return (
        <Wrapper>
            <Container>
                <Row>
                    <Link to='##' style={{ textDecoration: 'none' }}>
                        <Image
                            src='https://th.bing.com/th/id/R.b9f3fc6705fbfbb614a6ef5b792153a8?rik=P1OfakZkVUFCkQ&pid=ImgRaw&r=0'
                            alt='hell-singer'
                            style={{ maxWidth: '100%' }}
                        />
                        <div className='bannerTex text-black text-center mt-4' style={{ fontFamily: "'Ubuntu Condensed', sans-serif" }}>
                            <h3>Seeing Crystal-Clear Worlds: Hands-On With PlayStation VR2.</h3>
                            <h5>Four games show off the potential of Sony's next-gen VR hardware.</h5>
                            <h5>by <span> Andrew Reiner </span> on Sep 14, 2022 at 7:00 AM
</h5>
                        </div>
                    </Link>
                </Row>
            </Container>
        </Wrapper>
    );

};

export default FeatureBanner;