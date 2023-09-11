import React from 'react'
import { Star, StarFill } from 'react-bootstrap-icons'

const Review = ({ text, stars, author }) => {

    const showStars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="me-1">
            {index < stars ? <StarFill className='clr-yellow' /> : <Star className='clr-yellow' />}
        </span>
    ))

    return (
        <section>
            <div className="mb-2">
                <p className="fs-6 lh-1 h-200">
                    <i className="pe-">{text}</i>
                </p>
                <div className=" d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                        {showStars}
                    </div>
                    <h5 className="mt-0">{author}</h5>
                </div>
            </div>
        </section>
    )
}

export default Review
