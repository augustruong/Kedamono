import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'

export default class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            show: true,
            scrollPos: 0
        };
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    closeMobileMenu = () => {
        this.setState({clicked: false})
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("scroll", this.closeMobileMenu);
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
                <div className='menu-icon' onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <NavLink to='/' className='nav-link' activeClassName="active" onClick={this.closeMobileMenu}>HOME</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/menu' className='nav-link' activeClassName="active" onClick={this.closeMobileMenu}>MENU</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/events' className='nav-link' activeClassName="active" onClick={this.closeMobileMenu}>EVENTS</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/contact' className='nav-link' activeClassName="active" onClick={this.closeMobileMenu}>CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        );
    };
}