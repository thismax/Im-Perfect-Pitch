import React from 'react';

const Song = ({song, remove, selectSong}) => {
  return (
    <div className="song">
      <span className='track'>Track Name: {song.name}  </span><br/>
      <span className='artist'>Artist: {song.artist}  </span><br/>
      <span className='album'>Album: {song.album}  </span><br/>
      <i className="fa fa-play-circle-o fa-2x" aria-hidden="true" onClick={()=>{selectSong(song.uri)}}></i>
      <i className="fa fa-times-circle-o fa-2x" aria-hidden="true" onClick={()=>{remove(song.id)}}></i>
    </div>
  )
};

export default Song;