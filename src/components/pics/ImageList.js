import React from 'react';
import ImageCard from './ImageCard';

const ImageList = ({images}) => {

  const items = images
    .map(img => <ImageCard key={img.id} image={img} />);

  return (
    <div style={{
      display: 'grid',
      gridGap: '0 10px',
      gridAutoRows: '10px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'}}
    >
      {items}
    </div>
  );
};

export default ImageList;
