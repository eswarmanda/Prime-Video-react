import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'
// <img src={thumbnailUrl} alt="img" />
const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      nested
      trigger={<img className="thumbnail" src={thumbnailUrl} alt="thumbnail" />}
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            className="close-button"
            type="button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose size={20} color="#231f20" />
          </button>
          <div className="movie-player-container">
            <ReactPlayer url={videoUrl} controls />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
