import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <>
            <nav className='nav-container'>
                    <ul className='nav-menu'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                MENU
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                EVENTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                CONTACT
                            </Link>
                        </li>
                    </ul>
            </nav>
        </>
    );
}

export default NavBar;