import React from 'react';
import '../App.css'

import HeroSection from '../sections/HeroSection'
import MenuBody from '../sections/MenuBody'
import Footer from '../sections/Footer';

function MenuPage() {
    return(
        <>
            <HeroSection id={"offers"} title={"OUR OFFERS"}/>
            <MenuBody/>
            <Footer/>
        </>
    );
}

export default MenuPage;