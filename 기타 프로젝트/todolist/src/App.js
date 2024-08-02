import './App.css';
import { useState, useEffect, useRef, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DiaryStateContext, DiaryDispatchContext } from './context/context';
import NewsManager from './pages/NewsManager';
import New from './pages/New';
import Edit from './pages/Edit';
import Home from './pages/Home';
import News from './pages/News';
import { reducer } from './context/context';

function App() {
  const [data, dispatch] = useReducer(reducer, [])
  const [isDataLoaded, setIsDataLoaded] = useState(false)
  const idRef = useRef(0)

  useEffect(()=>{
    const rawData = localStorage.getItem("news")
    if (!rawData) {
      setIsDataLoaded(true)
      return
    }
    const localData = JSON.parse(rawData)
    if(localData.length === 0) {
      setIsDataLoaded(true)
      return
    }
    localData.sort((a, b) => Number(b.id) - Number(a.id))
    idRef.current = localData[0] + 1
    dispatch({
      type: "INIT",
      data: localData,
    })
    setIsDataLoaded(true)
  }, [])

  const onCreate = (date, imgUrl, title, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: data.idRef,
        date: new Date(date).getTime(),
        imgUrl,
        title,
        content,
      }
    })
  }
  
  const onUpdate = (targetId, date, imgUrl, title, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        imgUrl,
        title,
        content,
      }
    })
  }

  const ondelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    })
  }

  if (!isDataLoaded) {
    return <div>데이터를 불러오는 중입니다.</div>
  }

  else {
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, ondelete}}>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path="/new" element={<New />} />
              <Route path="/news/:id" element={<News />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path='/manager' element={<NewsManager/>}/>
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  }
}

export default App;
