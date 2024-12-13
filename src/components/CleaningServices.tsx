import React from 'react'
import styles from '../styles/CleaningServices.module.scss'
import { ServiceFeature } from './ServiceFeature'
import { Button } from './Button'

const features = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    title: 'Natural Cleaning Materials for Your Home',
    description:
      'We use eco-friendly products that are safe for your family and pets.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    title: 'Experienced Professionals You Can Trust',
    description:
      'Our trained staff ensures a thorough and reliable cleaning experience.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    title: 'Convenient Booking Options Tailored to You',
    description: 'Schedule your cleaning at a time that works for you.',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?placeholderIfAbsent=true&apiKey=1ca5aae3d1884dd0bbb1b55ee0784f8b',
    title: 'Why Choose Green Clean?',
    description: 'Join us in creating a healthier home and planet.',
  },
]

export const CleaningServices: React.FC = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.headerSection}>
        <span className={styles.tagline}>Eco-Friendly</span>
        <div className={styles.headerContent}>
          <h1 className={styles.mainHeading}>
            Discover Our Exceptional Cleaning Services
          </h1>
          <p className={styles.mainDescription}>
            At Green Clean, we prioritize your health and the environment. Our
            services use only natural materials to ensure a safe and clean home.
          </p>
        </div>
        <div className={styles.actionButtons}>
          <Button
            variant='secondary'
            size='regular'
            ariaLabel='Learn more about our services'
          >
            <a href='/offers'>Learn More</a>
          </Button>
        </div>
      </div>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresGrid}>
          {features.slice(0, 2).map((feature, index) => (
            <ServiceFeature key={index} {...feature} />
          ))}
        </div>
        <div className={styles.featuresGrid}>
          {features.slice(2, 4).map((feature, index) => (
            <ServiceFeature key={index + 2} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
