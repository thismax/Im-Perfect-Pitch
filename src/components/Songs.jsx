import React from 'react';
import Song from './Song';

const Songs = props => {
  return (
    <div className='songs'>
      {
        props.songs.map((song) => {
          return (<Song song={song} remove={props.remove} selectSong={props.selectSong} key={song.id}/>);
        })
      }
    </div>
  )
};

export default Songs;