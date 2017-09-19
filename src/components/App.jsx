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
      currentSong: {},
      songs: [],
      ready: false,
      uri: null,
    }
    this.findSong = this.findSong.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.fetchSongs = this.fetchSongs.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleLikeClick = this.handleLikeClick.bind(this);
    this.selectSong = this.selectSong.bind(this);
  }

  remove(id) {
    axios.post('/songs/remove', {id})
      .then((response) => {
        this.fetchSongs();
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  add(data) {
    axios.post('/songs/liked', {data})
      .then((response) => {
        this.fetchSongs();
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  selectSong(uri) {
    this.setState({
      uri: uri,
      ready: true
    });
  }

  fetchSongs() {
    axios.get('/songs/liked')
    .then((songs) => {
      this.setState({songs: songs.data});
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleLikeClick () {
    let current = this.state.currentSong;
    console.log(current);
    let data = {
      name: current.name,
      artist: current.artists[0].name,
      album: current.album.name,
      uri: current.uri,
    }
    this.add(data);
  }

  findSong(q) {
    axios.post('/songs/search', {q})
    .then((results) => {
      this.setState({
        currentSong: results.data.tracks.items[0],
        ready: true,
        uri: null,
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
          <h1 id="title">(Im)Perfect Pitch</h1>
          <input type="text" id="request" onKeyPress={this.handleKeyPress} />
          <SpotifyPlayer
            uri={this.state.uri || this.state.currentSong.uri}
            size={size}
            view={view}
            theme={theme}
          />
          <br/>
          <div className="favorites">
            <i id="add" className="fa fa-plus-circle fa-4x" aria-hidden="true" onClick={this.handleLikeClick}></i>
            <h3>Favorites</h3>
            <Songs songs={this.state.songs} remove={this.remove} selectSong={this.selectSong}/>
          </div>
        </div>
      )
    } else {
      this.fetchSongs();
      return (
        <div className="main">
          <h1 id="title">(Im)Perfect Pitch</h1>
          <input type="text" id="request" onKeyPress={this.handleKeyPress} />
          <div className="favorites-pre">
            <h3>Favorites</h3>
            <Songs songs={this.state.songs} remove={this.remove} selectSong={this.selectSong}/>
          </div>
        </div>
      )
    }
  }
};

export default App;

