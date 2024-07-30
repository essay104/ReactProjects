import React from 'react'
import TodoList from './TodoList'
import { useState } from 'react'

const Home = () => {
  const mockData = [
    {id: 1,
      text: "TodoList No.1",
      imageUrl:"https://i.namu.wiki/i/B1ovYr23JfDPL9_sARTNp8-n0UJwjvJg4qzkV-fLpC-h_-oVQTR7_caRa_V3iwCcfnQTCb4FZOitNeH3npG5gQ.webp",
      content: "밥먹기",
      completed: true },
    {id: 2,
      text: "TodoList No.2", 
      imageUrl:"https://i.namu.wiki/i/mLDgZfN3QiWG21FG89OxP0TZs4Wc1zXOOFPLKrbhxYzNAGlHi_xWDJ3LGe7WhvDFesLfMSZil1L48TlUrgAhjw.webp",
      content: "쓰레기버리기",
      completed: true },
    {id: 3, 
      text: "TodoList No.3", 
      imageUrl:"https://i.namu.wiki/i/kzZS9-7t9x6b0lRhZzN-HxPWs77ImDUoibWrdHywrtX1cpikU1rggupuAeIMxdqa_799XaE46l5mcNdA2q9ATQ.webp",
      content: "청소하기",
      completed: false },
  ]

  const [todos, setTodos] = useState(mockData)

  return (
    <div>
      <TodoList data={todos}/>
    </div>
  )
}

export default Home