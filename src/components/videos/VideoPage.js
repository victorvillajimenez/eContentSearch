import React, {useState, useEffect} from 'react';
import Search from './Search';
import youtube from '../../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSubmit = async term => {
    const results  = await youtube
      .get('/search', {params: { q: term}});
    setVideos(results.data.items);
    setSelectedVideo(results.data.items[0]);
  };

  const onVideoSelect = video => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    onSubmit('');
  }, []);

  return (
    <div className='container'>
      <Search onSubmit={onSubmit} />
      <div className=''>
        <div className='row'>
          <div className='col-md-8'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='col-md-4'>
            <VideoList
              videos={videos}
              onVideoSelect={onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
