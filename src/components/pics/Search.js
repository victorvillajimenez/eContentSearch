import React, {useState} from 'react';

const Search = ({onSubmit}) => {
  const [term, setTerm] = useState('');

  const onChange = e => {
    setTerm(e.target.value);
  };

  const onSearchSubmit = e => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className='card'>
      <form className='card-body mb-3' onSubmit={onSearchSubmit}>
        <label htmlFor='searchPics' className='form-label'>Image Search</label>
        <input
          id='searchPics'
          className='form-control'
          type='text'
          onChange={onChange}
          value={term}
        />
      </form>
    </div>
  );
};

export default Search;
