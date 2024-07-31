import React from 'react'
import "./DiaryItem.css"
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const DiaryItem = ({ todo }) => {
  console.log(todo)

  const navigate = useNavigate()

  const goDetail = () => {
    navigate(`/news/${todo.id}`)
  }

  const goEdit = () => {
    navigate(`/edit/${todo.id}`)
  }

  return (
    <div className="diary-item">
      <div
      onClick={goDetail}
      className="img_section"
      >
        <img src={todo.imageUrl} alt={todo.id} />
      </div>
      <div className='info_section'>
        <div className='content_wrapper'>
          <div className='title-section'>
            <h1>{todo.title}</h1>
            <p>({todo.date})</p>
          </div>
          <div className='content-section'>
            <p>{todo.content}</p>
          </div>
        </div>
      </div>
      <div className='button_section'>
        <Button text="수정하기" onClick={goEdit} />
        <Button text="삭제하기" onClick={goEdit} />
      </div>
    </div>
  )
}

export default DiaryItem