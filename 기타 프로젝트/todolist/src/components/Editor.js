import React from 'react'
import NewsItem from './NewsItem'
import Button from './Button'

const Editor = () => {
  return (
    <div className='Editor'>
      <div className='editor_section date_section'>
        <h4>오늘의 날짜</h4>
        <div className='input_wrapper'>
          <input type='date'/>
        </div>
      </div>
      <div className='editor_section'>
        <h4>이미지 주소 URL을 입력해주세요</h4>
        <div className='input_wrapper'>
          <NewsItem/>
        </div>
      </div>
      <div className='editor_section'>
        <h4>본문을 입력하세요</h4>
        <div className='input_wrapper'>
          <textarea placeholder='기사 내용을 입력해주세요'/>
        </div>
      </div>
      <div className='editor_section bottom_section'>
        <Button text='취소하기'/>
        <Button text='작성완료' type="positive"/>
      </div>
    </div>
  )
}

export default Editor