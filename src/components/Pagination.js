import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Pagination.css'

const Pagination = ({itemsPerPage, allItems, paginate, currentPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allItems.length / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    function handleClick(key) {
        const thumbKey = document.getElementById(key);
        const prevElement = document.getElementsByClassName('active-link');
        const activeElement = thumbKey.childNodes[0].children[0];
        const prevOverlay = prevElement[0].children[0];
        const activeOverlay = activeElement.children[0];
        prevElement[0].classList.remove('active-link')
        activeElement.classList.add('active-link')
        prevOverlay.classList.remove('hidden')
        activeOverlay.classList.add('hidden')
        
    }

    if (itemsPerPage == 3) {
        return (
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <div className='current-page-wrapper'>
                                <a onClick={() => paginate(number)} href="javascript:void(0)" onclick="return false" className='page-link'>
                                    <img src={`./images/moon-pagination/moon-${number%5}.svg`} className='page-icon'/>
                                </a>
                                {number == currentPage && 
                                    <p className='current-page-no'>{number}</p>
                                }
                            </div>
                            {number < pageNumbers.length &&
                                <hr className='pagi-hr'/>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li id={number} className='page-item'>
                            <div className='current-page-wrapper'>
                                <a className={number == 1 ? 'page-link active-link' : 'page-link'} 
                                    onClick={() => {paginate(number); handleClick(number)}} href="javascript:void(0)" onclick="return false"  activeClassName="active">
                                    <div className={number == 1 ? 'thumb-overlay hidden' : 'thumb-overlay'}></div>
                                    <img src={`./images/menu/${allItems[number-1].id}.png`} className='page-thumbnail'/>
                                </a>
                                {number == currentPage && 
                                    <p className='current-page-no'>{number}</p>
                                }
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
    
}

export default Pagination;