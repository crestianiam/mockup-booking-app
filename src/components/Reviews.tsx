import MyContainer from './MyContainer'
import { Row, Col } from "react-bootstrap"
import Review from './Review'
import { reviewsList } from '../data/lists'
import { Quote } from 'react-bootstrap-icons'

const Reviews = () => {
    return (
        <MyContainer>
            <div className="custom-bg-grey">
                <Row className='g-1'>
                    <Col lg={4} md={12}>
                        <div className='d-flex flex-column mb-4'>
                            <Quote className='clr-grey' size={48} />
                            <h2 className="title-paragraph mb-0" style={{ marginLeft: "10px" }}>What the say <span className='underline-blue'>about</span></h2>
                        </div>
                    </Col>
                    {reviewsList.map((review) => {
                        return (
                            <Col lg={3} md={12} key={review.id} className='mx-3'>
                                <Review author={review.author} stars={review.stars} text={review.text} />
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </MyContainer>
    )
}

export default Reviews
