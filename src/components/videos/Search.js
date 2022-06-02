import React, {useState} from 'react';

const Search = ({onSubmit}) => {
  const [term, setTerm] = useState('');

  const onChange = e => {
    setTerm(e.target.value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    onSubmit(term);
  };

  return (
    <div className='card'>
      <form
        onSubmit={onFormSubmit}
        className='card-body mb-3'
      >
        <label
          htmlFor='videoSearch'
          className='form-label'
        >
          Video Search
        </label>
        <input
          id='videoSearch'
          type='search'
          value={term}
          onChange={onChange}
          className='form-control'
        />
      </form>
    </div>
  );
};

export default Search;