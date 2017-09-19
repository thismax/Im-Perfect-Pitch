import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 300,
};
const view = 'list'; // or 'coverart' 
const theme = 'black'; // or 'white' 
 

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSong: '',
      songs: [],
      ready: false,
    }
    this.findSong = this.findSong.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  findSong(q) {
    axios.post('/songs/search', {q})
    .then((results) => {
      this.setState({currentSong: results.data.tracks.items[0].uri});
    })
  }

 handleKeyPress (event) {
  if(event.key == 'Enter'){
    console.log('key press worked')
    this.findSong(event.target.value);
  }
}

  render() {
    return (
      <div className="main">
        <h1 id="title">Perfect Pitch</h1>
        <input type="text" id="request" onKeyPress={this.handleKeyPress} />
        <Songs />
        <SpotifyPlayer
          uri={this.state.currentSong}
          size={size}
          view={view}
          theme={theme}
        />
      </div>
    )
  }
};

export default App;

