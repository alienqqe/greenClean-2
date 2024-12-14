import React from 'react'
import { FeatureProps } from '../types/types'
import { Button } from './Button'
import styles from '../styles/Feature.module.scss'

export const Feature: React.FC<FeatureProps> = ({
  tag,
  title,
  description,
  image,
  altText,
}) => {
  return (
    <section className={styles.feature}>
      <div className={styles.featureContent}>
        <span className={styles.featureTag}>{tag}</span>
        <h2 className={styles.featureTitle}>{title}</h2>
        <p className={styles.featureText}>{description}</p>
        <div className={styles.ctaActions}>
          <Button
            variant='secondary'
            size='regular'
            ariaLabel='Learn more about our features'
          >
            <a href='/about'>Learn More</a>
          </Button>
        </div>
      </div>
      <img
        src={image}
        alt={altText}
        className={styles.featureImage}
        loading='lazy'
      />
    </section>
  )
}
