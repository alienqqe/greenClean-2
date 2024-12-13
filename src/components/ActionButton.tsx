import React from 'react'
import styles from '../styles/CleaningServices.module.scss'
import { ActionButtonProps } from '../types/types'

export const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  variant,
  icon,
  onClick,
}) => {
  return (
    <button
      className={`${styles.actionButton} ${styles[variant]}`}
      onClick={onClick}
      type='button'
    >
      <span>{label}</span>
      {icon && (
        <img
          src={icon}
          className={styles.buttonIcon}
          alt=''
          role='presentation'
        />
      )}
    </button>
  )
}
