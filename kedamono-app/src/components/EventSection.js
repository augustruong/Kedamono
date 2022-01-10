import React from 'react';
import './EventSection.css'

function EventSection() {
    return (
        <div className='event-section-container'>
            <div className='event-section-header'>
                    <p className='section-number'>03</p>
                    <p className='section-title'>OUR EVENTS</p>                
            </div>
            <div className='event-section-main'>
                <div className='event-content-container'>
                    <p className='event-name'>『月夜のケダモノ』もくもく会 第1回</p>
                    <hr className='long-dashed-hr'/>
                    <p className='body-text event-description'>
                        クリエイター同士、バーで開発しながらエンジョイしましょう！<br></br>
                        Swift でも Ruby でも Unity でも PHPでも、何でも OK です！
                    </p>
                    
                    <div className='schedule-wrapper'>
                        <p className='schedule'>SCHEDULE</p>    
                        <table className='time-table'>
                            <tr>
                                <td className='body-text bold time'>11:00 - 11:30</td>
                                <td className='body-text'>自己紹介 + テーマ発表</td>
                            </tr>
                            <tr>
                                <td className='body-text bold time'>11:30 - 13:00</td>
                                <td className='body-text'>もくもく</td>
                            </tr>
                            <tr>
                                <td className='body-text bold time'>13:00 - 14:00</td>
                                <td className='body-text'>ランチ</td>
                            </tr>
                            <tr>
                                <td className='body-text bold time'>14:00 - 18:00</td>
                                <td className='body-text'>もくもく</td>
                            </tr>
                            <tr>
                                <td className='body-text bold time'>18:00 - 19:00</td>
                                <td className='body-text'>LT</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className='event-img-container'>
                    <div className='event-date'>2022.06.01</div>
                    <img src='./images/whisky.png' className='event-img'/>
                </div>
            </div>
            <div className='event-section-sub'>
                <hr className='event-sub-hr'/>
                <div className='event-card-container'>
                    <div className='event-card-wrapper'>
                        <div className='event-card-content'>
                            <p className='event-card-date'>2022.06.01</p>
                            <p className='event-card-name'>『月夜のケダモノ』もくもく会 第1回</p>
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
                                大学の課題をするでもよし、家計簿つけるという溜まった作業をするのもよし！入退室自由です。ご都合の良いタイミングでご参加いただければと思います。
                            </p>
                        </div>
                        <button className='btn-see-more event-btn'>もっと見る</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default EventSection
