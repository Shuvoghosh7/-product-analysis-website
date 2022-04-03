import React from 'react';

const AllReview = (props) => {
    const{picture,review,ratting,name}=props.review
    return (
        <div>
            <div >
                <img className='mx-auto rounded-full' src={picture} alt="" />
            </div>
            <div className='text-2xl'>
                <p><span className='font-bold'>Name: </span>{name}</p>
                <p><span className='font-bold'>Comment: </span>{review}</p>
                <p><span className='font-bold'>Ratting: </span><span className='text-amber-700'>{ratting}</span></p>
            </div>
        </div>
    );
};

export default AllReview;