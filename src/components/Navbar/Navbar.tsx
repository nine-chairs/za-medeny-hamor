import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import logo from '../../icons/logo_c.svg'
import './Navbar.css'
import LanguageSelector from '../LanguageSelector/LanguageSelector'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <nav>
      <div className='logoContainer'>
        <Link to='/' className='title'>
          <img className='logo' src={logo} alt={'logo'} />
        </Link>
      </div>
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
      <div className='navItemsContainer'>
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
        <div className="vertical-line"></div>
        <LanguageSelector />
      </div>

    </nav>
  )
}

export default Navbar