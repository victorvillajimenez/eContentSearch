import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }
  return (
    <div className='card'>
      <div className='ratio ratio-16x9'>
        <iframe
          title={video.snippet.title}
          allowFullScreen
          src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
      <div className='card-body'>
        <h4 className='card-title'>
          {video.snippet.title}
        </h4>
        <p className='card-text'>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
