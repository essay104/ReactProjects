import React from 'react'
import MainSlider from '../components/MainSlider'

const Home = () => {
  return (
    <div className='home'>
      <MainSlider />
      <div className='Home-gnb'>
        <div className='Home-gnb-menu'>포켓몬 정보</div>
        <div className='Home-gnb-menu'>지역 정보</div>
        <div className='Home-gnb-menu'>트레이너 정보</div>
        <div className='Home-gnb-menu'>열매 정보</div>
      </div>
    </div>
  )
}

export default Home