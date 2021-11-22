import React from 'react';
import ReactDOM, { render } from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { latitude: null, errorMessage: '' };
  }

  // state = { latitude: null, errorMessage: '' }; // Alternative to doing it in constructor -- drop "this"

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ latitude: position.coords.latitude }),
      (error) => this.setState({ errorMessage: error.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude} />;
    }

    return <LoadingSpinner></LoadingSpinner>;
  }

  render() {
    return <div className='border red'>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
