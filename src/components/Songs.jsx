import React from 'react';
import Song from './Song';

const Songs = props => {
  return (
    <div className='songs'>
      {
        props.songs.map((song) => {
          return (<Song song={song}/>);
        })
      }
    </div>
  )
};

export default Songs;