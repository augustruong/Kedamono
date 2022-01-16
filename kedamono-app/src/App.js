import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import MenuPage from './components/pages/MenuPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <img src='./images/texture.png' className='texture'/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          {/* <Route path='/events' element={<Event/>} />
          <Route path='/contact' element={<Contact/>} /> */}
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
