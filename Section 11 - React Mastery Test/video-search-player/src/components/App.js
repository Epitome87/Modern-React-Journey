import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onSearchTermSubmit('buildings');
  }

  onSearchTermSubmit = async (term) => {
    console.log(process.env.REACT_APP_GOOGLE_API_KEY);
    console.log(term);
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className='ui container'>
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />I have{' '}
        {this.state.videos.length} videos.
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              {this.state.selectedVideo && (
                <VideoDetail video={this.state.selectedVideo} />
              )}
            </div>
            <div className='five wide column'>
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
