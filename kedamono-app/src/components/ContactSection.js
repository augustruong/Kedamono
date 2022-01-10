import React from 'react';
import './ContactSection.css';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';

function ContactSection() {
    return (
        <div className='contact-section-container'>
            <div className='contact-section-header'>
                <p className='oo'>00<span className='section-title find-us-title'>FIND US ON</span>00</p>
                
            </div>
            <div className='social-media-wrapper'>
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
            <div className='map'></div>
        </div>
    )
}

export default ContactSection
