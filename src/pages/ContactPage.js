import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import './ContactPage.css'
import Footer from '../sections/Footer';

function ContactPage() {
    
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div className='contact-body-container'>
                <p className='contact-title' data-aos="fade-left">CONTACT US</p>
                <div className='short-vert-hr' data-aos="fade-bottom">
                    <hr/><hr/>
                </div>
                <p className='sub-title'>サービスに関するお問い合わせなどは下記の連絡でお願いします。</p>
                <div style={{transform: `translateY(${offsetY * 0.1}px)`}} data-aos="fade-up">
                <div className='contact-input-wrapper' >
                    <input
                        type={"text"}
                        placeholder={"名前"}
                    />
                </div>
                <div className='contact-input-wrapper'>
                    <input
                        type={"text"}
                        placeholder={"メール"}
                    />
                </div>
                <div className='contact-input-wrapper'>
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
            <Footer/>
        </>
    )
}

export default ContactPage
