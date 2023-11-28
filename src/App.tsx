import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
// pages
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import MedenyHamor from './pages/MedenyHamor/MedenyHamor'
import Support from './pages/Support/Support'
import News from './pages/News/News'
import Contact from './pages/Contact/Contact'

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/medeny_hamor" element={<MedenyHamor />} />
          <Route path="/news" element={<News />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </Suspense>
  )
}

export default App
