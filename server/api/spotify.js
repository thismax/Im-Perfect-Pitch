const request = require('request');
const querystring = require('querystring');
const clientID = require('./config').clientID;
const clientSecret = require('./config').clientSecret;

cont authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};