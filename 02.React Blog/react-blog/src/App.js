import './App.css';
import { useReducer, useRef, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

const mockData = [
  {
    id: "mock1",
    date: new Date().getTime() - 1,
    emotionId: 1,
    content: "카페가서 공부하기",
  },
  {
    id: "mock2",
    date: new Date().getTime() - 2,
    emotionId: 2,
    content: "분리수거하기, 음식물 쓰레기 버리기",
  },
  {
    id: "mock3",
    date: new Date().getTime() - 3,
    emotionId: 3,
    content: "밥먹고 게임하기",
  },
]

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const idRef = useRef(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home mockData={mockData} />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
