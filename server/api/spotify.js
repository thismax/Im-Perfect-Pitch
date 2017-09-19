const rp = require('request-promise');
const querystring = require('querystring');
const clientId = require('./config').clientId;
const clientSecret = require('./config').clientSecret;
const Promise = require('bluebird');

module.exports = {

  getToken: () => {
    return new Promise ((resolve, reject) => {
      let token;
      const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
        },
        form: {
          grant_type: 'client_credentials'
        },
        json: true,
      };
      rp.post(authOptions).then((results) => {
        token = results.access_token
        resolve(token);
      }).catch((err) => reject(err));
    });
  },

  search: (q, token) => {
    return new Promise ((resolve, reject) => {
      let searchOptions = {
        url: `https://api.spotify.com/v1/search?q=${q}&type=track&limit=1`,
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true,
      }
      rp.get(searchOptions).then((results) => {
        resolve(results);
      }).catch((err) => reject(err));
    })
  }

}
