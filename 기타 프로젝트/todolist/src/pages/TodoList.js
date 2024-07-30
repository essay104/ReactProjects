import React from 'react'
import Header from "../components/Header"
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import TodoItem from '../components/TodoItem'

const TodoList = ({ data }) => {
  const navigate = useNavigate()
  const onClickNew = () => {
    navigate("/new")
  }

  return (
    <div className='todoList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select>
          </select>
        </div>
        <div className='right_col'>
          <Button text="New Todos" type="positive" onClick={onClickNew} />
        </div>
      </div>
      <div className='todo-wrapper'>
        <div className='list_wrapper'>
        {data.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TodoList