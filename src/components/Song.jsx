import React from 'react';

const Song = ({song, remove, selectSong}) => {
  return (
    <div className="song">
      <span className='track' onClick={()=>{selectSong(song.uri)}}>Track Name: {song.name}  </span><br/>
      <span className='artist' onClick={()=>{selectSong(song.uri)}}>Artist: {song.artist}  </span><br/>
      <span className='album' onClick={()=>{selectSong(song.uri)}}>Album: {song.album}  </span><br/>
      <span className='delete' onClick={()=>{remove(song.id)}}>(click to delete)</span>
    </div>
  )
}

export default Song;