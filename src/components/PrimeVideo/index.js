import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )
  return (
    <div className="main-container">
      <div className="prime-main-card">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
        />
        <div className="movies-container">
          <h1>Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
          <h1>Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
