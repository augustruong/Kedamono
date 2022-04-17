import React, { useState, useEffect } from 'react';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
import ItemList from './ItemList';
import Pagination from './Pagination';
import { db } from "../firebase-config";
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 

import './ItemSlider.css'
import { async } from '@firebase/util'


const ItemSlider = () => {
    const [items, setItems] =  useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    var initItemsPerPage;
    if (window.innerWidth <= 960) { initItemsPerPage = 1 } else { initItemsPerPage = 3 }
    const [itemsPerPage, setItemsPerPage] = useState(initItemsPerPage);
    
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 960) { setItemsPerPage(1) } else { setItemsPerPage(3) }
        }
        window.addEventListener('resize', handleResize);

        const itemsCollectionRef = collection(db,"menu")
        onSnapshot(itemsCollectionRef, (snapshot) => {
            snapshot.docs.forEach((doc) => {
                getItems();
            })
        })
        const getItems = async () => {
            setLoading(true);
            const data = await getDocs(itemsCollectionRef);
            setItems(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            setLoading(false);
        }
    }, []);

    //Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    //Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const slideLeft = () => setCurrentPage(currentPage - 1);
    const slideRight = () => setCurrentPage(currentPage + 1);

    return (
        <section id='slider-pagi-container'>
            <div id='slider-container'>
                {currentPage > 1 && 
                    <MdChevronLeft size={60} color="white" className="slider-icon left" onClick={slideLeft}/>
                }
                
                <ItemList items = {currentItems} loading={loading}/>
                
                {currentPage < Math.ceil(items.length / itemsPerPage) &&
                    <MdChevronRight size={60} color="white" className="slider-icon right" onClick={slideRight}/>
                }
            </div>
            <Pagination itemsPerPage={itemsPerPage} allItems={items} paginate={paginate} currentPage={currentPage} />
        </section>
    )
}

export default ItemSlider;