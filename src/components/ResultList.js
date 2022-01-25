import {useRef, useCallback} from 'react';

export default function ResultList ({
  books,
  loading,
  hasMore,
  setPageNumber
}) {

  const observer = useRef();

  const lastElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        // eslint-disable-next-line
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return(
    <>
      {books.map((book, index) => {
        if (books.length === index + 1) {
          return <div ref={lastElementRef} key={index}>
            {book.title} - {book.authors}
          </div>;
        } else {
          return <div key={index}>
            {book.title} - {book.authors}
          </div>;
        }
      })}
      <div>{loading && 'LOADING...'}</div>
    </>
  );

}
