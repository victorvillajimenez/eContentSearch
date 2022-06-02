import axios from 'axios';

// params: {srsearch=SEARCHTERM}
export default axios.create({
  baseURL: 'https://en.wikipedia.org',
  params: {
    action: 'query',
    list: 'search',
    format: 'json',
    origin: '*'
  }
});
