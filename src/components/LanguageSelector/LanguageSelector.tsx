import React, { useState, ChangeEvent } from 'react';
import i18next from 'i18next';


const LanguageSelector = () => {
  const languages = [
    {
      code: 'sk',
      name: 'Slovencina',
      country_code: 'fr',
    },
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'de',
      name: 'Deutsch',
      country_code: 'de',
    },
    
  ]


  return (
    <div>
    <ul>
      {languages.map(({code, name, country_code}) => (
        <li key={country_code}>
          <button onClick={() => i18next.changeLanguage(code)}>
            {name}
          </button>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default LanguageSelector
