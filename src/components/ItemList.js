import React, { useState, useEffect } from 'react';
import Item from './Item'

import './ItemList.css'

const ItemList = ({items,loading}) => {

        if (loading) {
            return (
                <h2>Loading...</h2>
            );
        }
        return (
            <div id='item-list'>
                {items.map(item => (
                    <Item name={item.name} price={item.price} path={`/images/menu/${item.id}.png`} 
                    dryCount={item.dryCount} labelName={item.labelName} />
                ))}
            </div>
        );
    
}

export default ItemList
