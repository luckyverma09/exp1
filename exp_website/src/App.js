import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from '../src/Home';

function App() {
  return (
      <>
    <Routes>
      <Route path='/' element={<Home />}  /> 
      <Route path='/about' element={<AboutUs />}  /> 
      <Route path='/contact' element={<ContactUs />}  /> 
      
    </Routes>  
    </>
  );
}

export default App;