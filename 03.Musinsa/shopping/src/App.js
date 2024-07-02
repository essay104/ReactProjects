import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductAll from './components/ProductAll';
import ProductDetail from './components/ProductDetail';


function App() {

  return (
    <div>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route path="/" element={<ProductAll />} />
          <Route />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
