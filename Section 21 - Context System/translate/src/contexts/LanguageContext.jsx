import React from 'react';

const LanguageContext = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <LanguageContext.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageContext;
