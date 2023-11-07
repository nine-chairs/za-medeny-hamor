import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation();
  return (
    <nav>
      <Link to='/' className='title'>
        za! medený hámor
      </Link>
      <div 
        className='menu' 
        onClick={() => {
          setMenuOpen(!menuOpen)
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ''}>
        <li>
          <NavLink to='/about'>{t('title_about')}</NavLink>
        </li>
        <li>
          <NavLink to='/medeny_hamor'>{t('title_medeny_hamor')}</NavLink>
        </li>
        <li>
        <NavLink to='/news'>{t('title_news')}</NavLink>
        </li>
        <li>
        <NavLink to='/support'>{t('title_support')}</NavLink>
        </li>
        <li>
        <NavLink to='/contact'>{t('title_contact')}</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar