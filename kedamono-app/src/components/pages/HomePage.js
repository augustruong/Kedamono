import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import HomeBody from '../HomeBody';
import ContactSection from '../ContactSection';



function HomePage() {
    return(
        <>
            <HeroSection id={"home"} title={""}/>
            <HomeBody />
            <ContactSection />
        </>
    );
}

export default HomePage;