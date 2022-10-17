import React from 'react';
import './Header.css'
import '../../App.css'
const Header = () => {
    return (
        <>
            <div className='header'>
                <h1><span style={{ color: 'tomato' }}>Yummy</span> In The Tummy</h1>
            </div>
            <div className='nav'>
                <a className='button' href="./Home">Home</a>
                <a className='button' href="./Catagories">Catagories</a>
                <a className='button' href="./Privacy">Privacy Policy</a>
            </div>
            <div className="search_ber">
                <input type="text" placeholder='search here' />
            </div>
        </>
    );
};

export default Header;