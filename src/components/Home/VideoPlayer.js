import React from 'react'
import ReactPlayer from 'react-player/lazy'

const VideoPlayer = () => {
    return (
        <div>
           <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          width='100%'
          height='100%'
        />
      </div>
        </div>
    )
}

export default VideoPlayer
