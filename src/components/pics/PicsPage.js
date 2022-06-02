import React, {useState} from 'react';
import Search from './Search';
import ImageList from './ImageList';
import unsplash from '../../api/unsplash';

const PicsPage = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });
    setImages(response.data.results);
  };

  return (
    <div style={{textAlign: 'left'}}>
      <Search onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default PicsPage;
