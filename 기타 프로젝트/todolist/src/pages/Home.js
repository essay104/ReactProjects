import React from 'react'
import DiaryList from './DiaryList'
import { useState } from 'react'
import Header from '../components/Header'
import Button from '../components/Button'

const Home = () => {
  
  const mockData = [
    {id: 1,
      title: "Diary No.1",
      imageUrl:"https://i.namu.wiki/i/B1ovYr23JfDPL9_sARTNp8-n0UJwjvJg4qzkV-fLpC-h_-oVQTR7_caRa_V3iwCcfnQTCb4FZOitNeH3npG5gQ.webp",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      date: "2024-07-31",
      completed: true },
    {id: 2,
      title: "Dairy No.2", 
      imageUrl:"https://i.namu.wiki/i/mLDgZfN3QiWG21FG89OxP0TZs4Wc1zXOOFPLKrbhxYzNAGlHi_xWDJ3LGe7WhvDFesLfMSZil1L48TlUrgAhjw.webp",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      date: "2024-07-31",
      completed: true },
    {id: 3, 
      title: "Dairy No.3", 
      imageUrl:"https://i.namu.wiki/i/kzZS9-7t9x6b0lRhZzN-HxPWs77ImDUoibWrdHywrtX1cpikU1rggupuAeIMxdqa_799XaE46l5mcNdA2q9ATQ.webp",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      date: "2024-07-31",
      completed: false },
  ]

  const [todos, setTodos] = useState(mockData)

  const [pivotDate, setPivotDate] = useState(new Date())

  const onIncreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1))
  }

  const onDecreaseDate = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1,
    ))
  }

  const headerTitle = `${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1
  }월`

  return (
    <div>
        <Header
        title={headerTitle}
        leftChild={<Button text="Prev" onClick={onDecreaseDate}/>}
        rightChild={<Button text="Next" onClick={onIncreaseDate}/>}
        />
      <DiaryList data={todos}/>
    </div>
  )
}

export default Home