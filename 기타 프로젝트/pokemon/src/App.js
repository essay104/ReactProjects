import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import PokemonAll from './pages/PokemonAll';
import Maps from './pages/Maps';
import BottomNav from './components/BottomNav';
import { useState, useEffect } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
    <body>
      <div className='container'>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemonAll" element={<PokemonAll />} />
            <Route path='/maps' element={<Maps />} />
          </Routes>
        </section>
      </div>
    </body>
  );
}

export default App;
