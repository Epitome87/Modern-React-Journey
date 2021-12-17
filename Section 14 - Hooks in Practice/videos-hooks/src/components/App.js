import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';
import useVideos from '../hooks/useVideos';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('buildings');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // Refactoring all this out into a custom useVideos hook!
  // const [videos, setVideos] = useState([]);
  // useEffect(() => {
  //   onSearchTermSubmit('buildings');
  // }, []);

  // const onSearchTermSubmit = async (term) => {
  //   console.log(process.env.REACT_APP_GOOGLE_API_KEY);
  //   console.log(term);
  //   const response = await youtube.get('/search', {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   setVideos(response.data.items);
  //   selectedVideo(response.data.items[0]); // Only this code doesn't get refactored to useVideos
  // };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={search} />I have {videos.length} videos.
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className='five wide column'>
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
