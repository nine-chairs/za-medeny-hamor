import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
// pages
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import MedenyHamor from './pages/MedenyHamor'
import Support from './pages/Support'
import News from './pages/News'
import Contact from './pages/Contact'

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
