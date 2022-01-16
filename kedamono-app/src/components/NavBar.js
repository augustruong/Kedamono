import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

// const NavBar = () => {
//     const [click, setClick] = useState(false);
//     const handleClick = () => setClick(!click);
//     const closeMenu = () => setClick(false);

//     return (
//         <>
//             <nav className="nav-bar">
//                     <ul className='nav-menu'>
//                         <li className='nav-item'>
//                             <Link to='about' spy={true} smooth={true} className='nav-links'>
//                                 ABOUT
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='menu' spy={true} smooth={true} className='nav-links'>
//                                 MENU
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='events' spy={true} smooth={true} className='nav-links'>
//                                 EVENTS
//                             </Link>
//                         </li>
//                         <li className='nav-item'>
//                             <Link to='contact' spy={true} smooth={true} className='nav-links'>
//                                 CONTACT
//                             </Link>
//                         </li>
//                     </ul>
//             </nav>
//         </>
//     );
// }

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true,
            scrollPos: 0
        };
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }
    handleScroll = () => {
        this.setState({
            scrollPos: document.body.getBoundingClientRect().top,
            show: document.body.getBoundingClientRect().top > this.state.scrollPos
        })
    }

    render() {
        return (
            <nav className={this.state.show ? "nav-bar show" : "nav-bar hidden"}>
                <ul className='nav-menu'>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link' activeClassName="active">HOME</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/about' className='nav-link' activeClassName="active">ABOUT</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/menu' className='nav-link' activeClassName="active">MENU</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/events' className='nav-link' activeClassName="active">EVENTS</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link' activeClassName="active">CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}