import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import './App.css'
// pages
import Navbar from './components/Navbar/Navbar';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Router>
      <h2>{t('welcome_to_react')}</h2>;
      <Navbar />
      <LanguageSelector onLanguageChange={() => console.log('lingua')} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
