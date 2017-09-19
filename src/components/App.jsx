import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      songs: [],
      ready: false,
    }
  }

  render() {
    return (
      <div className="main">
        <h1 id="title">Perfect Pitch</h1>
        <input id="request" type="text"/>
        <Songs />
      </div>
    )
  }
};

export default App;