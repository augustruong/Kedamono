import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import './HeroSection.css'

const PageHeroSection = ({ id,title }) => {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

        return (
            <div className='hero-container'>
                <img src={`/images/${id}-hero-img.png`} className="hero-bg" />
                {(() => {
                    if(id=="home"){
                        return (
                            <div className='hero-content-container'>
                                <img src='/images/logo.svg' className="logo" data-aos="fade-down"
                                    style={{transform: `translateY(${offsetY * 0.01}px)`}}/>
                                <p className='sub-title' data-aos="fade-down"
                                    style={{transform: `translateY(${offsetY * 0.02}px)`}} >TSUKIYO NO KEDAMONO</p>
                                {/* <p className='catch-copy' style={{transform: `translateY(${offsetY * 0.12}px)`}}>キャッチコピー①</p> */}
                            </div>
                        )
                    } else return (
                            <div className='hero-content-container'>
                                <p className='hero-title'>{title}</p>
                                <div className='long-vert-hr'>
                                    <hr/><hr/>
                                </div>
                            </div>
                        )
                })()}
                
            </div>
        );
    
}

export default PageHeroSection;