import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TodoList from './pages/TodoList';
import TodoManager from './pages/TodoManager';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Button from './components/Button';
import Home from './pages/Home';


function App() {
  const [pivotDate, setPivotDate] = useState(new Date())

  const onIncreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth(), pivotDate.getDate() + 1))
  }

  const onDecreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth(), pivotDate.getDate() - 1
    ))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
  }월 ${pivotDate.getDate()}일`
  return (
    <div className="App">
      <Header
      title={headerTitle}
      leftChild={<Button text="Prev" onClick={onDecreaseDate}/>}
      rightChild={<Button text="Next" onClick={onIncreaseDate}/>}
      />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path='/manager' element={<TodoManager/>}/>
      </Routes>
    </div>
  );
}

export default App;
