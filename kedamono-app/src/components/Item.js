import React from 'react'
import './Item.css';

function Item() {
    return (
        <div className='item-container'>
            <div className='item-label'>ビール名</div>
            <div className='item-img-wrapper'>
                <img src='./images/lemon-sawa.png' className='item-img' alt='lemon-sawa'/>
                <div className='item-img-overlay flex-ct-ct'>
                    <i class="fal fa-plus-circle"/>      
                </div>
            </div>
            
        </div>
    )
}

export default Item;
