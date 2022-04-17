import React from 'react'
import './Items.css';

const Items = ({ items, loading}) => {
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div id='slider'>
            {items.map((item) => {
                return (
                        <div className='item-container'>
                            <div className='item-label'>{item.name}</div>
                            <div className='item-img-wrapper'>
                                <img src={`./images/${item.id}.png`} className='item-img'/>
                                <div className='item-img-overlay flex-ct-ct'>
                                    <i class="fal fa-plus-circle"/>      
                                </div>
                            </div>
                        </div>
                )
                
            })}
        </div>

    )
}

export default Items;
