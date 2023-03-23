import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Protfolio/Protfolio';
import Footer from './components/Footer/Footer';
import Home from '../src/Home';

function App() {
  return (
      <>

      <Home />
    {/* <Routes>
      <Route path='/about' element={<AboutUs/>}  /> 
      <Route path='/contact' element={<ContactUs/>}  />
      <Route path='/' element={<Navbar/>}/> 
    </Routes> */}

    
    </>
  );
}

export default App;
