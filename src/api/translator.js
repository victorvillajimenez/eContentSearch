import axios from 'axios';

// You must pay for this service 'https://cloud.google.com/translate/docs'
// Replace with you own KEY
const API_KEY = 'MY-KEY';

// params: {
//   q: 'my text'   => text to translate
//   target: 'es'   => language code
//   key: API_KEY       => API key 
// }

export default axios.create({
  baseURL: 'https://translation.googleapis.com', // POST /language/translate/v2
  params: {
    key: API_KEY
  }
});
