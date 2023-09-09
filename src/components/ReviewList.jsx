import React from 'react'
import MyContainer from './MyContainer'
import { Row, Col } from "react-bootstrap"
import Review from './Review'

const ReviewList = () => {
    return (
        <MyContainer>
            <Row>
                <Col className='col-4'>
                    <h2 className="title-paragraph">
                        What the say about
                    </h2>
                </Col>
                <Col className='col-4'>
                    <Review author={"Peter Masters"} stars={4}
                        text={"We thoroughly enhoyed our holiday in Sicily and were very pleased with our stay ad Alesa.Domineco were always quick to respond and very helpful."} />
                </Col>
                <Col className='col-4'>
                    <Review author={"theguardian"} stars={4}
                        text={"The Guardian discovers south Sicily's secrets during a week's stay at Casa d'Eraclea. Quiet beaches, fresh seafood and impressive ancient monuments all combine to create a wonderful week in southern Sicily."} />
                </Col>
            </Row>
        </MyContainer>
    );
}

export default ReviewList;
