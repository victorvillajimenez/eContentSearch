import {useState, useEffect} from 'react';
import {addBooks} from '../utils/dataHelper';
import axios from 'axios';

const BOOKS_URL = 'http://openlibrary.org/search.json';

export default function useBookSearchWithAxios (query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // Every time query changes, let's clear all the books
  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    const payloadRequest = {
      method: 'GET',
      url: BOOKS_URL,
      params: {
        q: query,
        page: pageNumber
      },
      cancelToken: new axios.CancelToken(c => cancel = c)
    };
    axios(payloadRequest)
      .then(json => {
        setBooks(prevBooks => addBooks(prevBooks, json.data.docs));
        setHasMore(json.data.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return {
    loading,
    error,
    books,
    hasMore
  };
}
