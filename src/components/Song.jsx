import React from 'react';

const Song = ({song, remove}) => {
  return (
    <div className="song">
      <span className='track'>Track Name: {song.name}  </span><br/>
      <span className='artist'>Artist: {song.artist}  </span><br/>
      <span className='album'>Album: {song.album}  </span><br/>
      <span className='delete' onClick={()=>{remove(song.id)}}>(click to delete)</span>
    </div>
  )
}

export default Song;