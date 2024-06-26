import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { getFormattedDate, emotionList } from '../util'
import "./Editor.css"
import EmotionItem from './EmotionItem'


const Editor = () => {
    const navigate = useNavigate()
    const handleOnGoBack = () => {
        navigate(-1)
    }
    return (
        <div className='Editor'>
            <div className='editor_section date_section'>
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input type='date' />
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {emotionList.map((it) => (
                        <EmotionItem key={it.id} {...it} />
                    ))}
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea placeholder='오늘은 어땠나요' />
                </div>
            </div>
            <div className='editor_section bottom_section'>
                <Button text="취소하기" />
                <Button text="작성완료" type="positive" />
            </div>
        </div>
    )
}

export default Editor