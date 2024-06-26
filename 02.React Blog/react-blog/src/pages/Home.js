import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import DiaryList from '../components/DiaryList'
import { useState } from 'react'

const Home = ({ onClick, mockData }) => {
  const [pivotDate, setPivotDate] = useState(new Date());

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
  }

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
    }월`;

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text="Prev" onClick={onDecreaseMonth} />}
        rightChild={<Button text="Next" onClick={onIncreaseMonth} />}
      />
      <DiaryList mockData={mockData} />
    </div>
  )
}

export default Home