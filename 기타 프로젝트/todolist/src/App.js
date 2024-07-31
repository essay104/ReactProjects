import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DiaryManager from './pages/DiaryManager';
import New from './pages/New';
import Edit from './pages/Edit';
import Home from './pages/Home';
import News from './pages/News';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/new" element={<New />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path='/manager' element={<DiaryManager/>}/>
        </Routes>
    </div>
  );
}

export default App;
