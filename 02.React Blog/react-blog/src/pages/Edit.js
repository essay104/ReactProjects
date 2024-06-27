import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { DiaryDispatchContext } from '../App'
import { useNavigate, useParams } from 'react-router-dom'
import { setPageTitle } from '../util'
import useDiary from '../hooks/useDiary'
import Editor from '../components/Editor'

const Edit = () => {
  const { id } = useParams()
  const data = useDiary(id)
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  const { onUpdate, onDelete } = useContext(DiaryDispatchContext)

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하시겠습니까? 다시 복구되지 않습니다.")) {
      onDelete(id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (data) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      const { date, emotionId, content } = data
      onUpdate(id, date, emotionId, content)
      navigate("/", { replace: true })
    }
  }

  useEffect(() => {
    setPageTitle(`${id}번 일기 수정`);
  }, []);

  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>
  } else {
    return (
      <div>
        <Header
          leftChild={<Button text="뒤로가기" onClick={goBack} />}
          title="일기 수정하기"
          rightChild={
            <Button type="negative" text="삭제하기" onClick={onClickDelete} />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    )
  }
}

export default Edit