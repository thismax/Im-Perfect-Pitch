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
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
  }

  remove(id) {
    axios.post('/songs/remove', {id})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  add(data) {
    axios.post('/songs/liked', {data})
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  fetchSongs() {
    axios.get('/songs/liked')
    .then((songs) => {
      this.setState({songs});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleLikeClick () {
    let current = this.state.currentSong;
    let data = {
      name: current.name,
      artist: current.artists[0].name,
      album: current.album.name,
    }
    this.add(data);
  }

  findSong(q) {
    axios.post('/songs/search', {q})
    .then((results) => {
      this.setState({
        currentSong: results.data.tracks.items[0],
        ready: true
      });
    });
  }

  handleKeyPress (event) {
    if(event.key == 'Enter'){
      this.findSong(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    if (this.state.ready) {
      return (
        <div className="main">
          <h1 id="title">Perfect Pitch</h1>
          <input type="text" id="request" onKeyPress={this.handleKeyPress} />
          <SpotifyPlayer
            uri={this.state.currentSong.uri}
            size={size}
            view={view}
            theme={theme}
          />
          <h2 className="like" onClick={this.handleLikeClick}>Click Me to Add to Favorites!</h2>
          <div className="favorites">
            <h3>Favorites</h3>
            <Songs songs={this.state.songs} remove={this.remove}/>
          </div>
        </div>
      )
    } else {
      this.findSong('dna');
      return (
        <div className='loading'>Loading</div>
      )
    }
  }
};

export default App;

