import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Content from '../components/Content'


const News = () => {
  const {id} = useParams()

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
        <Header
          leftChild={<Button onClick={goBack} text="< 뒤로가기" />}
          title="제목(임시)"
          rightChild={<Button onClick={goEdit} text="수정하기" />} />
        <Content/>
    </div>
  )
}

export default News