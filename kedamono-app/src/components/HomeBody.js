import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import Carousel from 'react-elastic-carousel';
import Item from './Item';
import EventPost from './EventPost';

import './HomeBody.css'

function HomeBody() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ]

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div id="home-body-container">
            <div className='about-section-container'>
                <div className='about-content-container' 
                    style={{transform: `translateY(${offsetY * 0.1}px)`}} data-aos="fade-up">
                    <p className='section-number'>01</p>
                    <p className='section-title text-center' style={{marginTop: `10px`}}>ABOUT</p>
                    <p className='body-text' style={{margin: `40px 70px 64px 70px`}}>
                        クリエイターが集まる会員制バー『月夜のケダモノ』<br/>
                        昼間はオフィスとして、夜はスナックバーとして営業をしております。<br/>
                        「赤羽駅東口」から徒歩4分の駅近<br/>
                        落ち着いた雰囲気・おしゃれな室内に定評があります。<br/>
                        クリエイターやアニメや映画の好き、音楽の好きな人などにお勧めです。<br/>
                        イベント も開催しているので少しでも興味がありましたら気軽にご参加ください。<br/>
                        店内の雰囲気をもっと知りたい方はこちら Facebook
                    </p>
                    <button className='btn-see-more about-btn'>もっと見る</button>
                </div>
            
                <div className='about-img-container' >
                    <img src='/images/dear-head.png' className='dear-img' data-aos="fade-up"/>
                </div>
                {/* <hr className='line-01' data-aos="fade-up"/> */}
            </div>

            <div className='offer-section-container'>
                <div className='offer-content-container' >
                    <div className='offer-section-header' data-aos="fade-down">
                        <p className='section-number text-center'>02</p>
                        <div className='offer-title-wrapper'>
                            <hr className='offer-border'/>
                            <p className='section-title' style={{margin: `5px 0`}}>OUR OFFERS</p>
                            <hr className='offer-border'/>
                        </div>
                    </div>
                    <p className='body-text text-center' style={{width: `100%`}}>
                        缶ビール各種や山崎、響、白州などのウィスキーを取り揃えております。<br></br>
                        アレンジしたカクテルやノンアルコールカクテルもご用意できます。
                    </p>
                </div>
                <div className='carousel-container' data-aos="fade-in">
                    <Carousel  breakPoints={breakPoints} outerSpacing={15} itemPadding={[10,5]} >
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </Carousel>
                </div>
            </div>

            <div className='event-section-container'>
                <div className='event-section-header' data-aos="fade-left">
                    <p className='section-number'>03</p>
                    <p className='section-title'>OUR EVENTS</p>                
                </div>

                <EventPost time={"2022.06.01"} title={"『月夜のケダモノ』オンラインもくもく会"}/>
                    
                <div className='event-sub'>
                    <hr className='event-sub-hr' data-aos="fade-up"/>
                    <div className='event-card-container' data-aos="fade-up" data-aos-delay="200">
                        <div className='event-card-wrapper'>
                            <div className='event-card-content'>
                                <p className='event-card-date'>2022.06.01</p>
                                <p className='event-card-name'>『月夜のケダモノ』もくもく会 第2回</p>
                                <p className='event-card-description body-text'>
                                クリエイター同士、バーで開発しながらエンジョイしましょう！<br></br>
                                Swift でも Ruby でも Unity でも PHPでも、何でも OK です！
                                </p>
                            </div>
                            <button className='btn-see-more event-btn'>もっと見る</button>
                        </div>
                        <div className='event-card-wrapper'>
                            <div className='event-card-content'>
                                <p className='event-card-date'>2022.01.05</p>
                                <p className='event-card-name'>新年オンラインもくもく会</p>
                                <p className='event-card-description body-text'>
                                オンラインもくもく会です！今年の抱負や目標などを皆で話しましょう！<br></br>
                                入退室自由ですご都合の良いタイミングでご参加いただければと思います。
                                </p>
                            </div>
                            <button className='btn-see-more event-btn'>もっと見る</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBody
