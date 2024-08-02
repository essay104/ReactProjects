import React from 'react'
import "./NewsItem.css"
import { useNavigate } from 'react-router-dom'
import Button from './Button'

const NewsItem = ({ data }) => {

  const navigate = useNavigate()

  const goDetail = () => {
    navigate(`/news/${data.id}`)
  }

  const goEdit = () => {
    navigate(`/edit/${data.id}`)
  }

  if (!data) {
    return <div>Loading...</div>
  }

  return (
    <div className="diary-item">
      <div
      onClick={goDetail}
      className="img_section"
      >
        <img src={data.imgUrl} alt={data.id} />
      </div>
      <div className='info_section'>
        <div className='content_wrapper'>
          <div className='title-section'>
            <h3>{data.title}
            </h3>
            <p>{data.date}</p>
          </div>
          <div className='content-section'>
            <p>{data.content}</p>
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

export default NewsItem