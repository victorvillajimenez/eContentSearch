import React, {useState, useEffect} from 'react';
import Search from './Search';
import WikiList from './WikiList';
import wikipedia from '../../api/wikipedia';

const WikiPage = () => {
  const [results, setResults] = useState([]);

  const onSubmit = async term => {
    const response = await wikipedia
      .get('/w/api.php',
        {params: {srsearch: term}}
      );
    setResults(response.data.query.search);
  };

  return (
    <div>
      <Search onSubmit={onSubmit} />
      <hr />
      <WikiList pages={results} />
    </div>
  );
};

export default WikiPage;
