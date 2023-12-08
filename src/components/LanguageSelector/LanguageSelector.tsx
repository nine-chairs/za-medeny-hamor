import React, { useState, useEffect, useRef } from 'react'
import i18next from 'i18next'
import DropdownItem from './DropdownItem'
import './LanguageSelector.css'

interface Language {
  country_code: string
  name: string
  text: string
}

const LanguageSelector: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(i18next.language)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const languages: Language[] = [
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
    const selectedLanguageObj = languages.find((lang) => lang.country_code === i18next.language)
    setSelectedLanguage(selectedLanguageObj ? selectedLanguageObj.text : '')
  }, [i18next.language])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    // Add global click event listener
    document.addEventListener('click', handleClickOutside)

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const availableLanguages = languages.filter((lang) => lang.country_code !== i18next.language)

  const handleItemClick = (language: string) => {
    i18next.changeLanguage(language)
    setIsDropdownOpen(false)
  }

  return (
    <div className='languageSelector' ref={dropdownRef}>
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
  )
}

export default LanguageSelector
