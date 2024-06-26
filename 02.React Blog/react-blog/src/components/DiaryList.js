import React from 'react'
import Button from './Button'
import DiaryItem from './DiaryItem'
import "./DiaryList.css"
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된순" },
]

const DiaryList = ({ mockData, date }) => {
    const navigate = useNavigate()
    const onClickNew = () => {
        navigate("/new")
    }

    return (
        <div className='DiaryList'>
            <div className='menu_wrapper'>
                <div className='left_col'>
                    <select>
                        {sortOptionList.map((it, idx) => (<option key={idx} value={it.value}>
                            {it.name}
                        </option>))}
                    </select>
                </div>
                <div className='right_col'>
                    <Button text="새 일기 쓰기" type="positive" onClick={onClickNew} />
                </div>
            </div>
            <div className='list_wrapper'>
                {mockData.map((it) => <DiaryItem key={it.id} {...it} />)}
            </div>
        </div>
    )
}

export default DiaryList