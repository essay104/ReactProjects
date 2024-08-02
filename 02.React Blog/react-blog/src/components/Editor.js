import React from 'react'
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from './Button'
import { getFormattedDate, emotionList } from '../util'
import "./Editor.css"
import EmotionItem from './EmotionItem'


const Editor = ({ initData, onSubmit }) => {
    const navigate = useNavigate()

    const initDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1);
        const day = String(date.getDate());
        return `${year}-${month}-${day}`;
    }

    const [state, setState] = useState({
        date: initDate(new Date()),
        emotionId: 1,
        content: ''
    })

    const { emotionId, content } = state;

    useEffect(() => {
        if (initData) {
            setState({
                ...initData,
                date: getFormattedDate(new Date(initData.date))
            })
        }
    }, [initData])

    const handleChangeDate = (e) => {
        setState({
            ...state,
            date: e.target.value,
        })
    }

    const handleChangeEmotion = (emotionId) => {
        setState((state) => ({
            ...state,
            emotionId,
        }))
    }

    const handleChangeContent = (e) => {
        setState({
            ...state,
            content: e.target.value
        })
    }

    const handleSubmit = () => {
        content.trim() === "" ? alert("내용을 입력해 주세요!!") : onSubmit(state)
    }

    const handleOnGoBack = () => {
        navigate(-1)
    }

    return (
        <div className='Editor'>
            <div className='editor_section date_section'>
                <h4>오늘의 날짜</h4>
                <div className='input_wrapper'>
                    <input type='date' value={state.date} onChange={handleChangeDate} />
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 감정</h4>
                <div className='input_wrapper emotion_list_wrapper'>
                    {emotionList.map((it) => (
                        <EmotionItem key={it.id} {...it}
                            onClick={handleChangeEmotion}
                            isSelected={state.emotionId === it.id}
                        />
                    ))}
                </div>
            </div>
            <div className='editor_section'>
                <h4>오늘의 일기</h4>
                <div className='input_wrapper'>
                    <textarea placeholder='오늘은 어땠나요'
                        value={state.content}
                        onChange={handleChangeContent}
                    />
                </div>
            </div>
            <div className='editor_section bottom_section'>
                <Button text="취소하기" onClick={handleOnGoBack} />
                <Button text="작성완료" type="positive" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default Editor