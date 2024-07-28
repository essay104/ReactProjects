import './App.css';
import Header from './components/Header';
import PokemonAll from './pages/PokemonAll';
import PokemonDetail from './pages/PokemonDetail';
import BottomNav from './components/BottomNav';
import { Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
      <div className='container'>
        <Header />
        <section>
          <Routes>
            <Route path="/" element={<PokemonAll />} />
            <Route path='/pokemon/:id' element={<PokemonDetail/>}/>
          </Routes>
        </section>
      </div>
  );
}

export default App;
