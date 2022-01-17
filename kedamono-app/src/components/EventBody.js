import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

import EventPost from './EventPost';
import './EventBody.css'
import EventSearchBar from './EventSearchBar';

function EventBody() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='event-body-container'>
            <p className='page-title'>TRENDING EVENTS</p>
            <EventPost time={"2022.06.01"} title={"『月夜のケダモノ』もくもく会 第1回"}/>
            <EventSearchBar/>
            <EventPost time={"2022.05.01"} title={"新年オンラインもくもく会"}/>
            <hr className='event-hr'/>
            <EventPost time={"2022.06.01"} title={"『月夜のケダモノ』もくもく会 第1回"}/>
        </div>
    )
}

export default EventBody
