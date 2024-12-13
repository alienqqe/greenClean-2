import React from 'react'
import { TestimonialProps } from '../types/types'
import { ASSETS } from '../assets/assets'
import styles from '../styles/Testimonial.module.scss'

export const Testimonial: React.FC<TestimonialProps> = ({
  rating,
  quote,
  author,
}) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src={index < rating ? ASSETS.ICONS.STAR : ASSETS.ICONS.STAR_HALF}
        alt=''
        className={styles.starIcon}
        aria-hidden='true'
      />
    ))
  }

  return (
    <div className={styles.testimonialCard}>
      <div
        className={styles.stars}
        aria-label={`Rated ${rating} out of 5 stars`}
      >
        {renderStars()}
      </div>
      <blockquote className={styles.testimonialQuote}>
        <p>{quote}</p>
      </blockquote>
      <div className={styles.testimonialAuthor}>
        <img
          src={author.avatar}
          alt=''
          className={styles.avatarImage}
          aria-hidden='true'
        />
        <div>
          <div className={styles.authorName}>{author.name}</div>
          <div className={styles.authorTitle}>{author.title}</div>
        </div>
      </div>
    </div>
  )
}
