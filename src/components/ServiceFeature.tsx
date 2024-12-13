import React from 'react'
import styles from '../styles/CleaningServices.module.scss'
import { ServiceFeatureProps } from '../types/types'

export const ServiceFeature: React.FC<ServiceFeatureProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className={styles.featureCard}>
      <img
        loading='lazy'
        src={icon}
        className={styles.featureIcon}
        alt=''
        role='presentation'
      />
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  )
}
