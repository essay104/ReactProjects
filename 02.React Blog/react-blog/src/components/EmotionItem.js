import React from 'react'
import "./EmotionItem.css"

const EmotionItem = ({ id, img, name, onClick, isSelected }) => {
    return (
        <div className='EmotionItem'>
            <img src={img} alt={`emotion${id}`} />
            <span>{name}</span>
        </div>
    )
}

export default EmotionItem