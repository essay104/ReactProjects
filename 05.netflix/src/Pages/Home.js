import React, { useEffect } from "react";
import Banner from "../Components/Banner";
import MovieSlide from "../Components/MovieSlide";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/actions/movieAction"

const Home = () => {
  const dispatch = useDispatch()
  const { popularMovies, topRatedMovies, upComingMovies, loading } = 
  useSelector((state) => state.movie)
  useEffect(()=>{
    dispatch(movieAction.getMovies())
  },[])

  
  if (loading) {
    return (
      <div className="loader">
        <ClipLoader
          color="#fff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div className="slide">
          {popularMovies.results && <Banner movie={popularMovies.results[0]} />}
        <div className="movieContents">
          <h1>Popular Movie</h1>
          <MovieSlide movies={popularMovies} />
          <h1>TopRated Movie</h1>
          <MovieSlide movies={topRatedMovies} />
          <h1>Upcoming Movie</h1>
          <MovieSlide movies={topRatedMovies} />
        </div>
      </div>
    );
  }

};

export default Home;
