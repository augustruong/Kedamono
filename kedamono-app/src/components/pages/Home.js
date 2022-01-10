import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection'
import AboutSection from '../AboutSection';
import MenuSection from '../MenuSection';
import EventSection from '../EventSection';
import ContactSection from '../ContactSection';

function Home() {
    return(
        <>
            <HeroSection />
            <AboutSection />
            <MenuSection />
            <EventSection />
            <ContactSection />
            
        </>
    );
}

export default Home;