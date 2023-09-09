import React from 'react';

const Review = ({ text, stars, author }) => {


    return (
        <section>
            <div className="col-md-4 mb-0">
                <p className="fs-6 lh-1">
                    <i className="fas fa-quote-left pe-2"></i>{text}
                </p>
                <h5 className="mt-3">{author}</h5>
            </div>
        </section >
    );
}

export default Review;
