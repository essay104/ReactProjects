import React from 'react'
import Button from './Button'
import "./DiaryItem.css"
import { useNavigate } from 'react-router-dom'
import { getEmotionImgById } from '../util'

const DiaryItem = ({ id, date, emotionId, content, mockData }) => {
    const navigate = useNavigate()

    const goDetail = () => {
        navigate(`/diary/${id}`)
    }

    const goEdit = () => {
        navigate(`/edit/${id}`)
    }

    return (
        <div className='DiaryItem'>
            <div
                onClick={goDetail}
                className={["img_section", `img_section_${emotionId}`].join(" ")}>
                <img src={getEmotionImgById(emotionId)} />
            </div>
            <div className='info_section'>
                <div className='date_wrapper'>
                    {new Date(date).toLocaleDateString()}
                </div>
                <div className='content_wrapper'>{content}</div>
                <div className='button_section'>
                    <Button text="수정하기" onClick={goEdit} />
                </div>
            </div>

        </div>
    )
}

export default DiaryItem