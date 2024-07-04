import React from 'react'
import { Link } from 'react-router-dom'

const BottomNav = () => {
    return (
        <div className='Home-gnb'>
            <Link className='Home-gnb-menu' to="/pokemonAll" >포켓몬 정보</Link>
            <div className='Home-gnb-menu'>지역 정보</div>
            <div className='Home-gnb-menu'>트레이너 정보</div>
            <div className='Home-gnb-menu'>열매 정보</div>
        </div>
    )
}

export default BottomNav