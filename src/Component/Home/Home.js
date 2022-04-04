import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../image.png'
import useReviews from '../Hooks/useReviews';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
    const[reviews,setReviews]=useReviews()
    console.log(reviews)
    return (
        <div>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 mt-24'>
                <div className='ml-10 mt-10'>
                    <p className='text-7xl text-slate-500'> Asus ROG Zephyrus G15</p>
                    <p className='text-7xl text-indigo-800'>The best gaming laptop</p>
                    <p className='text-2xl text-justify mt-8 mr-10'>Asus’s ROG Zephyrus G14 was our top gaming laptop pick for quite a while. It did just about everything right, and we weren’t sure whether Asus could ever replicate its resounding success. </p>
                </div>
                <div>
                     <img src={Image} alt="" />
                </div>
            </div>

            <div className='review-container my-7'>
                <p className='text-5xl text-center font-bold mb-10'>Customer Review</p>
                 <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                     {
                         reviews.slice(0,3).map(review => <ShowReview
                         key={review.id}
                         review={review}
                         />)
                     }
                 </div>
                <div className='text-center mt-10'>
                <Link className='text-3xl  p-3 rounded-lg bg-slate-800 text-white' to='/review'>
                 See more
                </Link>
                </div>

            </div>
        </div>
    );
};

export default Home;