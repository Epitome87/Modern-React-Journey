import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  //   static contextType = LanguageContext; // Not required if using a consumer

  render() {
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {({ language }) => (language === 'english' ? 'Submit' : 'Voorleggen')}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
