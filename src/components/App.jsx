import React, { Component } from 'react';
import axios from 'axios';
import Songs from './Songs';

export default class App extends Component {
  constructor () {
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