import React from 'react';

const Song = ({song}) => {
  return (
    <div className="song">
      <span className='track'>Track Name: {song.name}  </span>
      <span className='artist'>Artist: {song.artist}  </span>
      <span className='album'>Artist: {song.album}  </span>
      <span className='delete'>       X  </span>
    </div>
  )
}

export default Song;