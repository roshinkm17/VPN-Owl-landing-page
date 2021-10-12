import React from 'react'
import ReviewCard from './ReviewCard'

function Reviews() {
    return (
        <div id="reviews" className="mt-5 mx-auto">
            <h1 className="text-primary display-5 fw-bold">Reviews</h1>
            <div className="row mt-5">
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </div>
        </div>
    )
}

export default Reviews
