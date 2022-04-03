import React from 'react';

const ShowReview = (props) => {
   const{picture,review,ratting,name}=props.review
    return (
        <div>
            <div >
                <img className='mx-auto rounded-full' src={picture} alt="" />
            </div>
            <div>
                <p>Name:{name}</p>
                <p>Comment:{review}</p>
                <p>Ratting:{ratting}</p>
            </div>
        </div>
    );
};

export default ShowReview;