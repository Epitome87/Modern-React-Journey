import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos, onVideoSelect }) {
  return (
    <div className='ui relaxed divided list'>
      {videos.map((video) => {
        return (
          <VideoItem
            key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </div>
  );
}

export default VideoList;
