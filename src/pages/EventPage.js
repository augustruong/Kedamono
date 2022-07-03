import React from 'react'
import '../App.css'
import HeroSection from '../sections/HeroSection.js'
import EventSection from '../sections/EventSection.js'
import Footer from '../sections/Footer';

function EventPage() {
    return (
        <>
            <HeroSection id={"events"} title={"OUR EVENTS"}/>
            <EventSection />
            <Footer />
        </>
    )
}

export default EventPage
