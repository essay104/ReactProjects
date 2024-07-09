import React, { useEffect } from 'react'
import Banner from "../Components/Banner"
import MovieSlide from '../Components/MovieSlide'

const Home = () => {
  return (
    <div className='slide'>
      <Banner />
      <div className='movieContents'>
        <h1>Popular Movie</h1>
        <MovieSlide />
        <h1>TopRated Movie</h1>
        <MovieSlide />
        <h1>Upcomming Movie</h1>
        <MovieSlide />
      </div>
    </div>
  )
}

export default Home