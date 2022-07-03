import React, { useState, useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import './EventSection.css'

import EventPost from '../components/EventPost';
import EventSearchBar from '../components/EventSearchBar';

function EventSection() {
    const [offsetY,setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    useEffect(() => {
        Aos.init({duration: 2000});
        window.addEventListener("scroll",handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className='event-body-container text-center'>
            {/* <p className='page-title'>TRENDING EVENTS</p> */}
            <EventPost time={"2022.06.01"} title={"『月夜のケダモノ』オンラインもくもく会"} lore1={"大学の課題をするでもよし、家計簿つけるなど溜まった作業をするのもよし！"} lore2={"入退室自由です。ご都合の良いタイミングでご参加いただければと思います。"}/>
            {/* <EventSearchBar/> */}
            <EventPost time={"2022.05.01"} title={"『月夜のケダモノ』もくもく会 第2回"} lore1={"クリエイター同士、バーで開発しながらエンジョイしましょう！"} lore2={"Swift でも Ruby でも Unity でも PHPでも、何でも OK です！"}/>
            <EventPost time={"2022.06.01"} title={"新年オンラインもくもく会"} lore1={"オンラインもくもく会です！今年の抱負や目標などを皆で話しましょう！"} lore2={"入退室自由ですご都合の良いタイミングでご参加いただければと思います。"}/>
        </div>
    )
}

export default EventSection
