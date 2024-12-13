'use client'
import React from 'react'
import { ButtonProps } from '../types/types'
import styles from '../styles/Button.module.scss'

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  children,
  onClick,
  className,
  ariaLabel,
}) => {
  const buttonClass = `${styles.button} ${styles[`button${variant}${size}`]} ${
    className || ''
  }`

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type='button'
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
