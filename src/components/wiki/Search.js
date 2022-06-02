import React, {useState, useEffect} from 'react';

const Search = ({onSubmit}) => {

  const [term, setTerm] = useState('');

  const onChange = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    if (term.trim()) {
      const timeoutID = setTimeout(() => {
        onSubmit(term);
      }, 500);
      return () => {
        clearTimeout(timeoutID);
      }
    }
  }, [term]);

  return (
    <div className='card'>
      <div
        className='card-body'>
        <label
          htmlFor='wikiSearch'
          className='form-label'
        >
          Wiki Search
        </label>
        <input
          id='wikiSearch'
          className='form-control'
          type='search'
          value={term}
          onChange={onChange} />
      </div>  
    </div>
  );
};

export default Search;
