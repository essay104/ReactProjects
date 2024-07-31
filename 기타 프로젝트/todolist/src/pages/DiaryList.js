import React from 'react'
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'
import DiaryItem from '../components/DiaryItem'

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
]

const DiaryList = ({ data }) => {
  const [sortedData, setSoltedData] = useState([])
  const navigate = useNavigate()
  const onClickNew = () => {
    navigate("/new")
  }

  return (
    <div className='diaryList'>
      <div className='menu_wrapper'>
        <div className='left_col'>
          <select>
            {sortOptionList.map((it, idx) => (<option key={idx} value={it.value}>
              {it.name}
            </option>))}
          </select>
        </div>
        <div className='right_col'>
          <Button text="새글작성" type="positive" onClick={onClickNew} />
        </div>
      </div>
      <div className='diary-wrapper'>
        <div className='list_wrapper'>
        {data.map((todo) => (
            <DiaryItem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default DiaryList