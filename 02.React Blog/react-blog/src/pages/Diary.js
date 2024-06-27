import React, { useEffect, useId } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import useDiary from '../hooks/useDiary'
import { getFormattedDate, setPageTitle } from "../util";

const Diary = () => {
  const { id } = useParams()
  const data = useDiary(id)

  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    setPageTitle(`${id}번 일기`)
  })

  const { date, emotionId, content } = data

  const title = `${getFormattedDate(new Date(Number(date)))}`

  return (
    <div>
      <Header
        leftChild={<Button onClick={goBack} text="< 뒤로가기" />}
        title={title}
        rightChild={<Button onClick={goEdit} text="수정하기" />} />
      <Viewer content={content} emotionId={emotionId} />
    </div>
  )
}

export default Diary