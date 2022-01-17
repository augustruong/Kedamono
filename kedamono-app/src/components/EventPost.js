import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './EventPost.css'

const EventPost = ({time,title}) => {
    return (
        <div className='event-post-container'>
            <div className='event-content-wrapper' data-aos="fade-right">
                <p className='event-name'>{title}</p>
                <hr className='long-dashed-hr'/>
                <p className='body-text'>
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
            <div className='event-img-wrapper' data-aos="fade-up">
                <div className='event-date'>{time}</div>
                <img src='./images/whisky.png' className='event-img'/>
            </div>
        </div>
    )
}

export default EventPost
