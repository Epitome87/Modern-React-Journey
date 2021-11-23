import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    console.log('In App: ', term);
    // Fetch data based on term!
    const response = await unsplash.get('search/photos', {
      params: { query: term },
    });

    console.log(response);

    const tempArray = [];
    response.data.results.map((image) => {
      tempArray.push({
        id: image.id,
        url: image.urls.small,
        description: image.description,
      });
    });

    this.setState({ images: [...tempArray] });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
