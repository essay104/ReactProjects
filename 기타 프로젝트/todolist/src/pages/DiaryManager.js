import React from 'react'
import Header from '../components/Header'
import Button from '../components/Button'
import { useState } from 'react'

const DiaryManager = () => {

  return (
    <div>
        <Header
        title="뉴스매니저"
        leftChild={<Button text="Prev"/>}
        rightChild={<Button text="Next"/>}
        />
    </div>
  )
}

export default DiaryManager