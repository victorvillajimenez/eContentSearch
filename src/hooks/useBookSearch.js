import {useState, useEffect} from 'react';
import {addBooks} from '../utils/dataHelper';

const BOOKS_URL = 'http://openlibrary.org/search.json';

export default function useBookSearch (query, pageNumber) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  // Every time query changes, let's clear all the books.
  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    const controller = new AbortController();
    const queryParams = new URLSearchParams({
      q: query,
      page: pageNumber
    }).toString();
    const options = {
      method: 'GET',
      signal: controller.signal
    };
    fetch(`${BOOKS_URL}?${queryParams}`, options)
      .then(response => response.json())
      .then(json => {
        setBooks(prevBooks => addBooks(prevBooks, json.docs));
        setHasMore(json.docs.length > 0);
        setLoading(false);
      })
      .catch(e => {
        if (e.name === 'AbortError') return;
        setError(true);
      });
    return () => controller.abort();
  }, [query, pageNumber]);

  return {
    loading,
    error,
    books,
    hasMore
  };
}
