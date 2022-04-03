import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Image from '../../image.png'
import useReviews from '../Hooks/useReviews';


const Home = () => {
    const[review,setReview]=useReviews()
    console.log(review)
    return (
        <div>
            <div className='grid md:grid-cols-2 mt-24'>
                <div className='ml-10'>
                    <p className='text-7xl text-slate-500'> Asus ROG Zephyrus G15</p>
                    <p className='text-7xl text-indigo-800'>The best gaming laptop</p>
                    <p className='text-2xl text-justify mt-8 mr-10'>Asus’s ROG Zephyrus G14 was our top gaming laptop pick for quite a while. It did just about everything right, and we weren’t sure whether Asus could ever replicate its resounding success. </p>
                </div>
                <div>
                     <img src={Image} alt="" />
                </div>
            </div>

            <div className='review-container'>
                <p>Customer Review</p>

                <Link to='/review'>
                 See more
                </Link>

            </div>
        </div>
    );
};

export default Home;