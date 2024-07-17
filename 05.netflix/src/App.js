import "./App.css"
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home"
import Movies from './Pages/Movies';
import MovieDetaile from './Pages/MovieDetaile';
import Navigation from "./Components/Navigation"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetaile />} />
      </Routes>
    </div>
  );
}

export default App;
