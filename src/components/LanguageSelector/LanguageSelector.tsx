import React, { useState, useEffect } from 'react'
import i18next from 'i18next'
import DropdownItem from './DropdownItem'
import './LanguageSelector.css'

const LanguageSelector: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language)

  const languages = [
    {
      country_code: 'sk',
      name: 'Slovenčina',
      text: 'SK',
    },
    {
      country_code: 'en',
      name: 'English',
      text: 'EN',
    },
    {
      country_code: 'de',
      name: 'Deutsch',
      text: 'DE',
    },
  ]

  useEffect(() => {
    // Find the language object in the languages array by its country_code
    const selectedLanguageObj = languages.find((lang) => lang.country_code === i18next.language)
    // Use the 'name' property as the selected language name
    setSelectedLanguage(selectedLanguageObj ? selectedLanguageObj.text : '')
  }, [i18next.language])

  // Filter out the selected language from the list of languages
  const availableLanguages = languages.filter((lang) => lang.country_code !== i18next.language);

  const handleItemClick = (language: string) => {
    i18next.changeLanguage(language)
    setIsDropdownOpen(false)
  }

  return (
    <div className='languageSelector'>
      <div className='dropdownToggle' onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedLanguage}
      </div>
      {isDropdownOpen && (
        <ul className='dropdownMenu'>
          {availableLanguages.map((lang) => (
            <DropdownItem
              key={lang.country_code}
              language={lang.country_code}
              text={lang.text}
              onItemClick={handleItemClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector
