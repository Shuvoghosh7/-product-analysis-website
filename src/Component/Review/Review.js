import React from 'react';
import AllReview from '../AllReview/AllReview';
import useReviews from '../Hooks/useReviews';

const Review = () => {
    const[reviews,setReviews]=useReviews()
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                reviews.map(review => <AllReview
                key={review.id}
                review={review}
                />)
            }
        </div>
    );
};

export default Review;