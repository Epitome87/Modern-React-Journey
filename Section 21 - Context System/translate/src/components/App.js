import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

function App() {
  const [language, setLanguage] = useState('english');

  const onLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    console.log(language);
  };

  return (
    <div className='ui container'>
      <div>Select a language:</div>
      <i className='flag us' onClick={() => onLanguageChange('english')} />
      <i className='flag nl' onClick={() => onLanguageChange('dutch')} />
      <LanguageContext.Provider value={language}>
        <UserCreate />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
