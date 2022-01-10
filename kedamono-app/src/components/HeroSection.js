import React from 'react';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <img src='/images/logo.svg' className="logo" alt="logo" />
            <p className='sub-title'>TSUKIYO NO KEDAMONO</p>
            <p className='catch-copy'>キャッチコピー①</p>
        </div>
    );
}

export default HeroSection;