import React from 'react'
import './EventSearchBar.css'

const EventSearchBar = () => {
    return (
        <div className='search-bar-container'>
            <hr className='search-bar-hr'/>
            <form action='/' method='get' className='search-bar-wrapper'>
                <i class="far fa-search"></i>
                <input
                    type={"text"}
                    placeholder={"イベント検索"}
                />
            </form>
        </div>
    )
}

export default EventSearchBar
