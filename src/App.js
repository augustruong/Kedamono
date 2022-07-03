import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import EventPage from './pages/EventPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <img src={process.env.PUBLIC_URL + '/images/texture.png'} className='texture'/>
        <Routes>
          <Route path='/Kedamono' element={<HomePage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/events' element={<EventPage/>} />
          <Route path='/contact' element={<ContactPage/>} />
        </Routes>
        <p className='copyright'>Copyright © 2021 DHU. All rights reserved.</p>
      </Router>
      
    </>
  );
}

export default App;
