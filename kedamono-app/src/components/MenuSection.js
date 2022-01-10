import React from 'react';
import './MenuSection.css';

function MenuSection() {
    return (
        <div className='menu-section-container'>
            <div className='menu-content-container'>
                <div className='menu-section-header'>
                    <p className='section-number center'>02</p>
                    <div className='offers-title-container'>
                        <hr className='offers-border center'/>
                        <p className='section-title offers-title'>OUR OFFERS</p>
                        <hr className='offers-border center'/>
                    </div>
                </div>
                <p className='body-text offers-description center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ornare, nisi vitae sagittis elementum, eros enim condimentum lacus, non pulvinar lorem sem quis ligula. Cras eget tempor libero. In rhoncus ut mauris in pharetra.</p>
            </div>
            <div className='menu-list-container flex-center'>
                <div className='drink-img-container'>
                    <div className='drink-label'>ビール名</div>
                    <img src='./images/lemon-sawa.png' className='drink-img' alt='lemon-sawa'/>
                </div>
                <div className='drink-img-container'>
                    <div className='drink-label'>ビール名</div>
                    <img src='./images/lemon-sawa.png' className='drink-img' alt='lemon-sawa'/>
                </div>
                <div className='drink-img-container'>
                    <div className='drink-label'>ビール名</div>
                    <img src='./images/lemon-sawa.png' className='drink-img' alt='lemon-sawa'/>
                </div>
                <div className='drink-img-container'>
                    <div className='drink-label'>ビール名</div>
                    <img src='./images/lemon-sawa.png' className='drink-img' alt='lemon-sawa'/>
                </div>
            </div>
            <div className='page-list-container flex-center'>
                <div className='page-wrapper center'>
                    <img src='./images/moon-1.svg' className='page-img'/>
                    <p className='page-number'>1</p>
                </div>
                <hr className='page-list-hr'/>
                <div className='page-wrapper center'>
                    <img src='./images/moon-2.svg' className='page-img'/>
                    <p className='page-number'>2</p>
                </div>
                <hr className='page-list-hr'/>
                <div className='page-wrapper center'>
                    <img src='./images/moon-3.svg' className='page-img'/>
                    <p className='page-number'>3</p>
                </div>
                <hr className='page-list-hr'/>
                <div className='page-wrapper center'>
                    <img src='./images/moon-4.svg' className='page-img'/>
                    <p className='page-number'>4</p>
                </div>
                <hr className='page-list-hr'/>
                <div className='page-wrapper center'>
                    <img src='./images/moon-5.svg' className='page-img'/>
                    <p className='page-number'>5</p>
                </div>
            </div>
        </div>
    )
}

export default MenuSection
