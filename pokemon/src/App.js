import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import PokemonAll from './pages/PokemonAll';
import Maps from './pages/Maps';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState('');

  const fetchPokemon = async () => {
    setError('');
    setPokemonData(null);

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon not found');
      }
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchPokemon()
  }, [])

  return (
    <body>
      <div className='container'>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemon" element={<PokemonAll />} />
            <Route path='/maps' element={<Maps />} />
          </Routes>
        </section>
      </div>
    </body>
  );
}

export default App;
