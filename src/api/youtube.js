import axios from 'axios';
const KEY = 'AIzaSyCqQP24MryNBsIIdXu-C0ml_-E9XP6VrTU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});