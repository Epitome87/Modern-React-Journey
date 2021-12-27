import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from '../contexts/LanguageContext';

function App() {
  return (
    <div className='ui container'>
      <LanguageStore>
        <LanguageSelector />
        <UserCreate />
      </LanguageStore>
    </div>
  );
}

export default App;
