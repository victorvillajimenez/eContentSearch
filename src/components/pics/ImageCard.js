import React, {useState, useRef, useEffect} from 'react';

const ImageCard = ({ image }) => {
  const imgRef = useRef(null);
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    imgRef.current.addEventListener('load', () => {
      const height = imgRef.current.clientHeight;
      setSpans(Math.ceil(height / 10));
    });
  }, []);

  return (
    <div style={{gridRowEnd: `span ${spans}`}}>
      <img
        ref={imgRef}
        style={{
          width: '250px'
        }}
        alt={image.description}
        src={image.urls.regular}
      />
    </div>
  );
};

export default ImageCard;
