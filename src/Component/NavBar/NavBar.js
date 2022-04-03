import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link to='/'>HOME</Link>
            <Link to='/review'>REVIEW</Link>
            <Link to='/dashBoard'>DASHBOARD</Link>
            <Link to='/blogs'>BLOGS</Link>
        </div>
    );
};

export default NavBar;