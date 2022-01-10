import React from 'react';
import './AboutSection.css'


function AboutSection() {
    return (
        <div className='about-section-container'>
                <div className='about-content-container'>
                    <p className='section-number'>01</p>
                    <p className='section-title about-title center'>ABOUT</p>
                    <p className='body-text about-description'>
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
            
                <div className='about-img-container'>
                    <img src='/images/dear-head.png' className='dear-img' alt='hear-head'/>
                </div>
                <hr className='line-01'/>
        </div>
    )
}

export default AboutSection
