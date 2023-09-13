import { Col, Image, Row, Button, Nav } from 'react-bootstrap'
import MyContainer from '../components/MyContainer'
import { NavLink } from 'react-router-dom'
import Benefits from '../components/Benefits'
import Locations from "../components/Locations"
import Reviews from '../components/Reviews'
import { homeIntro, homeDescription, destinationDescription } from '../data/lists'

const Home = () => {
    return (
        <MyContainer>
            <Image src='/images/home.jpg' alt='homepage-image' style={{ height: "80vh", width: "100%" }} />
            <div className='mt-5'></div>
            <MyContainer>
                <Row>
                    <Col lg={6} md={12}>
                        <h2 className='title-paragraph'>
                            {homeIntro}
                        </h2>
                        <br />
                        <p>
                            {homeDescription}
                        </p>
                        <div>
                            <Nav.Link as={NavLink} to="/villas">
                                <Button className="bg-yellow rounded-0 border-0 d-lg-none">
                                    Villas In Sicily
                                </Button>
                                <div className='d-none d-lg-inline-flex align-items-center justify-space-between text-decoration-none text-body mt-5'>
                                    <div className='btn-line-x me-2'></div>
                                    <div>Villas In Sicily</div>
                                </div>
                            </Nav.Link>

                        </div>
                    </Col>
                    <Col lg={6} md={12} className="d-none d-lg-block">
                        <Image src='/images/sicily.png' alt='homepage-image' fluid />
                    </Col>
                </Row>
            </MyContainer>
            <div className='mt-5'></div>
            <Benefits />
            <div className='mt-5'></div>
            <MyContainer>
                <h2 className='title-paragraph text-center'>
                    Choose your next <span className='underline-blue'>Destinantion</span>
                </h2>
                <p className='text-center'>
                    {destinationDescription}
                </p>
            </MyContainer>
            <div className='mt-5'></div>
            <Locations />
            <div className='mt-5'></div>
            <Reviews />
        </MyContainer>
    )
}

export default Home
