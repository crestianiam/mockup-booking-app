import React from 'react';

const Review = ({ text, stars, author }) => {


    return (
        <section>
            <div class="col-md-4 mb-0">
                <h5 class="mt-3">{author}</h5>
                <p class="px-xl-3">
                    <i class="fas fa-quote-left pe-2"></i>{text}
                </p>
                <h5 class="mt-3">{author}</h5>
            </div>
        </section >
    );
}

export default Review;
