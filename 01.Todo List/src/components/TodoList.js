import React, { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo }) => {
  const [search, setSearch] = useState("");

  const gestSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter((it) =>
          it.content.toLowerCase().include(search.toLowerCase())
        );
  };

  return (
    <div className="TodoList">
      <h4>Todo List</h4>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력해주세요"
      />
      <div className="list_wrapper">
        {todo.map((it) => (
          <TodoItem
            key={todo.id}
            content={it.content}
            isDone={it.isDone}
            createDate={it.createDate}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
