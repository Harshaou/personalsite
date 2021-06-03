import React from 'react'
import ReactPlayer from 'react-player'

const VideoPlayer = () => {
    return (
        <div>
           <div className='player-wrapper'>
            <ReactPlayer
              className='react-player'
              url='https://youtu.be/dvZNUHfbs8w'
              width='100%'
              height='100%'
            />
      </div>
        </div>
    )
}

export default VideoPlayer
