import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='text-center my-5 navBar'>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/review'>REVIEW</CustomLink>
            <CustomLink to='/dashBoard'>DASHBOARD</CustomLink>
            <CustomLink to='/blogs'>BLOGS</CustomLink>
        </div>
    );
};

export default NavBar;