'use client'
import React from 'react'
import { FooterProps } from '../types/types'
import { NavLink } from './NavLink'
import { ASSETS } from '../assets/assets'
import styles from '../styles/Footer.module.scss'

export const Footer: React.FC<FooterProps> = ({ socialLinks }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <img
          src={ASSETS.LOGO}
          alt='Green Clean Logo'
          className={styles.footerLogo}
        />
        <div className={styles.footerLinks}>
          <NavLink href='/offers'>Eco Services</NavLink>

          <NavLink href='/about'>About Us</NavLink>
        </div>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className={styles.socialLink}
              aria-label={`Follow us on ${link.platform}`}
            >
              <img
                src={link.icon}
                alt=''
                className={styles.socialIcon}
                aria-hidden='true'
              />
            </a>
          ))}
        </div>
      </div>
      <hr />
      <footer
        style={{
          fontSize: '0.9rem',
          color: '#777',
          textAlign: 'center',
          paddingTop: '20px',
          width: '100%',
        }}
      >
        <p>&copy; 2024 GreenClean. All rights reserved.</p>
      </footer>
    </footer>
  )
}
