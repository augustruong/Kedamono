import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';
import Aos from "aos";
import "aos/dist/aos.css";

import './HeroSection.css'

const PageHeroSection = ({ id,title }) => {
    const [device,setDevice] = useState("pc");
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 1200) { setDevice("mob") } else { setDevice("pc") }
        }
        window.addEventListener('resize', handleResize);

        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

        return (
            <div className='hero-container'>
                <img src={process.env.PUBLIC_URL + `/images/${id}-hero-img.png`} className="hero-bg" />
                {(() => {
                    if(id=="home"){
                        return (
                            <div className='hero-content-container'>
                                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} className="logo" data-aos="fade-down"
                                    style={{transform: `translateY(${offsetY * 0.01}px)`}}/>
                                <p className='sub-title' data-aos="fade-down"
                                    style={{transform: `translateY(${offsetY * 0.02}px)`}} >TSUKIYO NO KEDAMONO</p>
                                <Link to='access' spy={true} smooth={true} offset={50} duration={500}>
                                    <button className='access-btn'>アクセスを見る</button>
                                </Link>
                            </div>
                        )
                    } else return (
                            <div className='hero-content-container'>
                                <div className='hero-title-wrapper'>
                                    <div className='hero-title-text'>{title}</div>
                                    <img className='hero-title-img' src={process.env.PUBLIC_URL + `/images/our-${id}-${device}.png`}/>
                                </div>
                            </div>
                        )
                })()}
                
            </div>
        );
    
}

export default PageHeroSection;