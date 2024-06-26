import React, { useEffect, useId } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { getFormattedDate, setPageTitle } from "../util";

const Diary = ({ emotionId, content }) => {

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }


  return (
    <div>
      <Header
        leftChild={<Button onClick={goBack} text="< 뒤로가기" />}
        rightChild={<Button text="수정하기" />} />
      <Viewer content={content} emotionId={emotionId} />
    </div>
  )
}

export default Diary