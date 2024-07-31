import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Editor from '../components/Editor'

const New = () => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
}

  return (
    <div>
        <Header
        title="새 뉴스 쓰기"
        leftChild={<Button text="뒤로가기" onClick={goBack}/>}
        rightChild={new Date().toLocaleDateString()}
        />
        <Editor/>
    </div>
  )
}

export default New