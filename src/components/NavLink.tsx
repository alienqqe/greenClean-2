import React from 'react'
import { NavLinkProps } from '../types/types'
import styles from '../styles/NavLink.module.scss'

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className,
}) => {
  return (
    <a href={href} className={`${styles.navLink} ${className || ''}`}>
      {children}
    </a>
  )
}
