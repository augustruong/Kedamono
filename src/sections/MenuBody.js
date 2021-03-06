import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './MenuBody.css'

import Item from '../components/Item.js'
import ItemSlider from '../components/ItemSlider';

function MenuBody() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='menu-body-container'>
            {/* <p className='page-title'>OUR OFFERS</p> */}

            <div>
                <div className='menu-main'>
                    <div className='item-pickup-img' data-aos="fade-right">
                        <p className='menu-date'>2022 06 02</p>
                        <img src={process.env.PUBLIC_URL + '/images/lqr_awamori.png'} className='awamori-main-img'/>
                        <img src={process.env.PUBLIC_URL + '/images/lqr_awamori_shadow.png'} className='awamori-shadow-img'/>
                        <p className='menu-new-label'>発売開始</p>
                    </div>
                    <div className='item-pickup-content'>
                        <p className='item-pickup-title'>OFFER OF THE MONTH</p>
                        <p className='item-price'>500円</p>
                        <p className='item-name'>Awamori</p>
                        <p className='item-pickup-lore'>沖縄県特産の伝統的な 本格焼酎 です。<br></br>しっかりした味と力強さで、<br></br>とても飲みやすく芳醇な焼酎です。</p>
                    </div>
                </div>
                
                <div className='menu-favorite' data-aos="fade-in" data-aos-duration="2000">
                    <p className='favorite-text'>Favorite</p>
                    <ItemSlider/>
                </div>
            </div>
        </div>
    )
}

export default MenuBody