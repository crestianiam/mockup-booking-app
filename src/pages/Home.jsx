import React from 'react'
import { Col, Image, Row, Button } from 'react-bootstrap'
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
                    </Col>
                    <Col lg={6} md={12} className="d-none d-lg-block">
                        <Image src='/images/map.jpg' alt='homepage-image' fluid />
                    </Col>
                </Row>
            </MyContainer>
            <Button as={NavLink} to="/villas" className="bg-yellow rounded-0 border-0">
                Villas In Sicily
            </Button>
            <div className='mt-5'></div>
            <Benefits />
            <div className='mt-5'></div>
            <MyContainer>
                <h2 className='title-paragraph text-center'>
                    Choose your next Destinantion
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
