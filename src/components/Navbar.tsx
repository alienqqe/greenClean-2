import React, { useState } from 'react'
import { NavbarProps } from '../types/types'
import { NavLink } from './NavLink'
import styles from '../styles/Navbar.module.scss'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar: React.FC<NavbarProps> = ({ logo, navLinks }) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <nav
      className={`${styles.navbar} navbar navbar-expand-lg w-100`}
      aria-label='Main navigation'
    >
      <div className='container-fluid w-100'>
        {/* Logo Section */}
        <a href='/' className='navbar-brand'>
          <img src={logo} alt='Green Clean Logo' className={`${styles.logo}`} />
        </a>

        {/* Toggler Button */}
        <button
          className='navbar-toggler'
          type='button'
          onClick={handleNavCollapse}
          aria-controls='navbarNav'
          aria-expanded={!isNavCollapsed}
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Collapsible Links */}
        <div
          className={`collapse navbar-collapse ${
            !isNavCollapsed ? 'show' : ''
          }`}
          id='navbarNav'
        >
          <div className='navbar-nav ms-auto'>
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                <Link className='nav-link fs-5' to={link.href}>
                  {link.text}
                </Link>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
