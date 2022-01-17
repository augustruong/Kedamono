import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection.js'
import EventBody from '../EventBody'
import ContactSection from '../ContactSection';

function EventPage() {
    return (
        <>
            <HeroSection id={"events"} title={"OUR EVENTS"}/>
            <EventBody />
            <ContactSection />
        </>
    )
}

export default EventPage
