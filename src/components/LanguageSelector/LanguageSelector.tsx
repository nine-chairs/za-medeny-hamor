import React, { useState, ChangeEvent } from 'react';

interface LanguageSelectorProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en'); // Default language is English

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    onLanguageChange(newLanguage);
  };

  return (
    <div>
      <label htmlFor="languageSelect">Select a language: </label>
      <select id="languageSelect" value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="sk">Slovencina</option>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
      </select>
    </div>
  );
};

export default LanguageSelector;

