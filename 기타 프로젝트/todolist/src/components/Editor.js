import React from 'react'
import NewsItem from './NewsItem'
import Button from './Button'
import "./Editor.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFormattedDate } from '../util'

const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate()

    const initDate = (date) => {
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1)
      const day = String(date.getDate())
      return `${year}-${month}-${day}`
    }

    const [state, setState] = useState({
      date: initDate(new Date()),
      imgUrl: '',
      title: '',
      content: ''
    })

  useEffect(() => {
    if (initData) {
        setState({
            ...initData,
            date: getFormattedDate(new Date(initData.date))
        })
    }
}, [initData])

const { date, imgUrl, title, content } = state

  const handleChangeDate = (e) => {
    setState({
      ...state,
      date: e.target.value,
    })
  }

  const handleTitleUpload = (e) => {
    setState({
      ...state,
      title: e.target.value,
    })
  }

  const handleImgUpload = (e) => {
    setState({
      ...state,
      imgUrl: e.target.value,
    })
  }

  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    })
  }

  const handleSubmit = () => {
    content.trim() === "" ? alert("내용을 입력해주세요!") : onSubmit(state)
  }

  const handleOnGoBack = () => {
    navigate(-1)
  }

  const categoryOptionList = [
    { value: "politics", name: "정치" },
    { value: "economy", name: "경제" },
    { value: "society", name: "사회" },
    { value: "lifestyle_culture", name: "생활/문화" },
    { value: "it_science", name: "IT/과학" },
    { value: "world", name: "세계" },
    { value: "sports", name: "스포츠" },
    { value: "entertainment", name: "연예" },
  ]

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div className='Editor'>
      <div className='editor_section date_section'>
        <h3>오늘의 날짜</h3>
        <div className='input_wrapper'>
          <input type='date' value={state.date} onChange={handleChangeDate}/>
        </div>
      </div>
      <div className='editor_section'>
        <h3>제목 입력</h3>
        <input
        type='text'
        placeholder='제목을 입력하세요'
        value={state.title}
        onChange={handleTitleUpload}
        />
      </div>
      <div className='editor_section'>
        <h3>카테고리</h3>
        <select value={selectedCategory} onChange={handleChange}>
          <option disabled value="">뉴스 카테고리를 선택해주세요</option>
          {categoryOptionList.map((it, idx) =>
          (<option key={idx} value={it.value}>{it.name}</option>))}
        </select>
      </div>
      <div className='editor_section'>
        <h3>이미지</h3>
        <input
        type='text'
        placeholder='이미지 주소 URL을 입력해주세요'
        value={state.imgUrl}
        onChange={handleImgUpload}
        />
        <div className='input_wrapper'>
        </div>
      </div>
      <div className='editor_section'>
        <h3>본문을 입력하세요</h3>
        <div className='input_wrapper'>
          <textarea placeholder='기사 내용을 입력해주세요'
          value={state.content}
          onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className='editor_section bottom_section'>
        <Button text='취소하기' onClick={handleOnGoBack} />
        <Button text='작성완료' type="positive" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Editor