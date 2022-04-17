import React from 'react';
import '../../App.css'

import HeroSection from '../HeroSection.js'
import MenuBody from '../MenuBody.js'
import ContactSection from '../ContactSection';

function MenuPage() {
    return(
        <>
            <HeroSection id={"offers"} title={"OUR OFFERS"}/>
            <MenuBody/>
            <ContactSection/>
        </>
    );
}

export default MenuPage;