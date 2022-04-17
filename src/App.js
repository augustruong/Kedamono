import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import MenuPage from './components/pages/MenuPage';
import EventPage from './components/pages/EventPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <img src={process.env.PUBLIC_URL + '/images/texture.png'} className='texture'/>
        <Routes>
          <Route path='/Kedamono' element={<HomePage/>} />
          <Route path='/Kedamono/about' element={<AboutPage/>} />
          <Route path='/Kedamono/menu' element={<MenuPage/>} />
          <Route path='/Kedamono/events' element={<EventPage/>} />
          <Route path='/Kedamono/contact' element={<ContactPage/>} />
        </Routes>
        <p className='copyright'>Copyright © 2021 DHU. All rights reserved.</p>
      </Router>
      
    </>
  );
}

export default App;
