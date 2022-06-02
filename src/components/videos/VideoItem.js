import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  const {title, thumbnails} = video.snippet;
  return (
    <div
      onClick={() => onVideoSelect(video)}
      style={{cursor: 'pointer'}}
      className='list-group-item list-group-item-action'
    >
      <img
        alt={title}
        style={{maxWidth: '180px'}}
        className='img-fluid rounded'
        src={thumbnails.medium.url}
      />
      <p className='card-text'>
        {title}
      </p>
    </div>
  );

};

export default VideoItem;
