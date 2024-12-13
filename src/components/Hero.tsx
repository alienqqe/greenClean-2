import React from 'react'
import { HeroProps } from '../types/types'
import { Button } from './Button'
import styles from '../styles/Hero.module.scss'
import 'animate.css'
import { Link } from 'react-router-dom'

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  image,
  altText,
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1
          className={`${styles.heroTitle} animate__animated animate__slideInDown`}
        >
          {title}
        </h1>
        <p className={`${styles.heroText} animate_animated animate__shakeY`}>
          {description}
        </p>
        <div className={styles.ctaActions}>
          <Button
            variant='primary'
            size='regular'
            ariaLabel='Book cleaning service now'
          >
            <Link to='/offers' className='text-light'>
              Book Now
            </Link>
          </Button>
          <a href='/about'>
            <Button
              variant='secondary'
              size='regular'
              ariaLabel='Learn more about our services'
            >
              <Link to='/offers'>Learn More</Link>
            </Button>
          </a>
        </div>
      </div>
      <img
        src={image}
        alt={altText}
        className={`${styles.heroImage} animate__animated animate__zoomInDown`}
        loading='eager'
      />
    </section>
  )
}
