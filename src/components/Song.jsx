import React from 'react';

const Song = ({song, remove, selectSong}) => {
  return (
    <div className="song">
      <span className='track' onClick={()=>{selectSong(song.uri)}}>Track Name: {song.name}  </span><br/>
      <span className='artist' onClick={()=>{selectSong(song.uri)}}>Artist: {song.artist}  </span><br/>
      <span className='album' onClick={()=>{selectSong(song.uri)}}>Album: {song.album}  </span><br/>
      <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={()=>{remove(song.id)}}></i>
    </div>
  )
}

export default Song;