import React from 'react'
import MyContainer from './MyContainer'
import { Row, Col } from "react-bootstrap"
import Review from './Review'
import { reviewsList } from '../data/lists'

const Reviews = () => {
    return (
        <MyContainer>
            <Row className='g-1'>
                <Col lg={4} md={12}>
                    <h2 className="title-paragraph">
                        What the say about
                    </h2>
                </Col>
                {reviewsList.map((review) => {
                    return (
                        <Col lg={4} md={12} key={review.id}>
                            <Review author={review.author} stars={review.stars} text={review.text} />
                        </Col>
                    )
                })}
            </Row>
        </MyContainer>
    )
}

export default Reviews
