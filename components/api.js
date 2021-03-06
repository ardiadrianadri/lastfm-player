import {
  API_KEY
} from '../config/initial.js';

class Api {
  constructor() {}
  byArtist(artist, action) {
    let endpoint = '';
    switch (action) {
      case 'getTopTracks':
        endpoint = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`;
        return fetch(endpoint).then(res => {
          return res.json();
        });
      default:
        console.log("default");
    }
  }
}

export default new Api();