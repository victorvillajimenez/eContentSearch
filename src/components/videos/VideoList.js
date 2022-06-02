import Reaxct from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => {
  return (
    <div className='list-group list-group-flush'>
      {videos.map(v => 
        <VideoItem
          key={v.id.videoId}
          video={v}
          onVideoSelect={onVideoSelect}
        />
      )}
    </div>
  );
};

export default VideoList;
