import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

function ContactSection() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id='contact' className='contact-section-container'>
            <div className='contact-section-header' data-aos="fade-up">
                <p className='oo'>00<span className='section-title find-us-title'>FIND US ON</span>00</p>
            </div>
            <div className='social-media-wrapper' data-aos="fade-up">
                <a 
                    class='social-icon-link facebook'
                    href="https://www.facebook.com/TsukiyoKedamono"
                    target='_blank'
                    aria-label='Facebook'
                >
                    <i class="fab fa-facebook"/>
                </a>
                <a 
                    class='social-icon-link twitter'
                    href="https://www.facebook.com/TsukiyoKedamono"
                    target='_blank'
                    aria-label='Twitter'
                >
                    <i class="fab fa-twitter"/>
                </a>                   
            </div>

            {/* <iframe className='map' data-aos="fade-up" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8264816988835!2d139.72079951533107!3d35.77963848017151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60189302be091c43%3A0xa83d798ccb9c592e!2zSmFwYW4sIOOAkjExNS0wMDQ1IFRva3lvLCBLaXRhIENpdHksIEFrYWJhbmUsIDItY2jFjW1l4oiSMTYsIOODkeODvOODoOODk-ODq-i1pOe-vSAzZg!5e0!3m2!1sen!2s!4v1642080078912!5m2!1sen!2s" 
            style={{border:'0', width: '100%', height: '375px'}} allowfullscreen="" loading="lazy"></iframe> */}

            <div className='map-wrapper'>
                <div className='mapImg'></div>
                <div className='location-tag'>
                    <img src={process.env.PUBLIC_URL + '/images/location-label.png'} className='location-label'/>
                    <p className='location-text'>
                        〒115-0045<br/> 
                        東京都北区赤羽２丁目１６<br/> 
                        パームビル赤羽３F<br/> 
                        070-6409-8466
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactSection
