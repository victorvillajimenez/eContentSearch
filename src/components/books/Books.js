import {useState} from 'react';
import useBookSearch from '../../hooks/useBookSearch';
// import useBookSearchWithAxios from '../hooks/useBookSearchWithAxios';
import Search from './Search';
import ResultList from './ResultList';
import './books.css';

export default function Books() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);

  const {
    loading,
    error,
    books,
    hasMore
  } = useBookSearch(query, pageNumber);
  // } = useBookSearchWithAxios(query, pageNumber);

  return (
    <div className='booksPage'>
      <Search
        query={query}
        setQuery={setQuery}
        setPageNumber={setPageNumber}
      />
      <div className='numResults'>
        Number of results shown: {books.length}
      </div>
      <ResultList
        books={books}
        loading={loading}
        hasMore={hasMore}
        setPageNumber={setPageNumber}
      />
      <div>{error && 'ERROR'}</div>
    </div>
  );
}
