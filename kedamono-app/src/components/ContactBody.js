import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import './ContactBody.css'
import ContactSection from './ContactSection';

function ContactBody() {
    
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <div className='event-body-container'>
            <div className='hero-content-container'>
                <p className='contact-title' data-aos="fade-left">CONTACT US</p>
                <div className='content-line'></div>
            </div>
            <div className='content-line2' data-aos="fade-bottom"></div>
            <p className='sub-title'>サービスに関するお問い合わせなどは下記の連絡でお願いします。</p>
            <div style={{transform: `translateY(${offsetY * 0.1}px)`}} data-aos="fade-up">
            <div className='contact-name-wrapper' >
                <input
                    type={"text"}
                    placeholder={"名前"}
                />
            </div>
            <div className='contact-name-wrapper'>
                <input
                    type={"text"}
                    placeholder={"メール"}
                />
            </div>
            <div className='contact-name-wrapper'>
            <input
                    type={"text"}
                    placeholder={"タイトル"}
                />
            </div>
            <textarea cols="50" rows="10"
                    type={"text"}
                    placeholder={"問い合わせ内容"}
                />
            <button className='submit-button'>送信</button>
            </div>
            
        </div>
        <ContactSection/>
        </>
    )
}

export default ContactBody
