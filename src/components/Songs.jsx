import React from 'react';
import Song from './Song';

const Songs = props => {
  return (
    <div className='songs'>
      <Song />
      <Song />
      <Song />
      <Song />
      <Song />
    </div>
  )
};

export default Songs;