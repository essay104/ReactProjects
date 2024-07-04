import React from 'react'
import "./MainSlider.css"
import sliderImg02 from "../imgs/sliderImg/slider-img02.jpg"

const MainSlider = () => {
    return (
        <div className='slider-wrap'>
            <div className='slider'>
                <img src={sliderImg02} />
            </div>
            <div className='pagers'>
                <span className='pager pager1 active'></span>
                <span className='pager pager2'></span>
                <span className='pager pager3'></span>
                <span className='pager pager4'></span>
            </div>
        </div>
    )
}

export default MainSlider