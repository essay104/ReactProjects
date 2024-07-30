import React from 'react'
import "./TodoItem.css"
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const TodoItem = ({ todo }) => {
  console.log(todo)

  const navigate = useNavigate()

  const goDetail = () => {
    navigate(`/todos/${todo.id}`)
  }

  const goEdit = () => {
    navigate(`/edit/${todo.id}`)
  }

  return (
    <div className="todo-item">
      <div
      onClick={goDetail}
      className="img_section"
      >
        <img src={todo.imageUrl} alt={todo.id} />
      </div>
      <div className='info_section'>
        <div className='content_wrapper'>{todo.content}</div>
      </div>
      <div className='button_section'>
        <Button text="수정하기" onClick={goEdit} />
        <Button text="삭제하기" onClick={goEdit} />
        <Button text="완료" />
      </div>
    </div>
  )
}

export default TodoItem