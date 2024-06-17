import React, { useState, useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";
import "./App.css";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "코인노래방 노래연습",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "헬스장 런닝머신 고고",
    createDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };

  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} />
    </div>
  );
}

export default App;
