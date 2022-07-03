import React from 'react';
import '../App.css'
import HeroSection from '../sections/HeroSection';
import HomeBody from '../sections/HomeBody';
import Footer from '../sections/Footer';

function HomePage() {
    return(
        <>
            <HeroSection id={"home"} title={""}/>
            <HomeBody />
            <Footer />
        </>
    );
}

export default HomePage;