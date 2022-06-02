import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 4YHHQCNoMcBCcgzdJvzOx53vW8PwC5rnwcTV_AiRDCo'
  }
});
