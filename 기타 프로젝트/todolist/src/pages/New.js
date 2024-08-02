import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'
import { DiaryDispatchContext } from '../context/context'

const New = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
}
  const { onCreate } = useContext(DiaryDispatchContext)

  const onSubmit = (data) => {
    const {date, imgUrl, title, content} = data
    onCreate(date, imgUrl, title, content)
    navigate("/")
  }

  return (
    <div>
        <Header
        title="새 뉴스 쓰기"
        leftChild={<Button text="뒤로가기" onClick={goBack}/>}
        rightChild={new Date().toLocaleDateString()}
        />
        <Editor onSubmit={onSubmit}/>
    </div>
  )
}

export default New