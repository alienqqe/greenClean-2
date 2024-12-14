'use client'
import React from 'react'
import { ASSETS } from '../assets/assets'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { Feature } from './Feature'
import { Testimonial } from './Testimonial'
import { Footer } from './Footer'
import styles from '../styles/GreenClean.module.scss'
import { CleaningServices } from './CleaningServices'

export const GreenClean: React.FC = () => {
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Anotation', href: '/anotation' },
    { text: 'About Us', href: '/about' },
    { text: 'What we offer', href: '/offers' },
    { text: 'SWOT', href: '/swot' },
    { text: 'Business plan', href: '/plan' },
    { text: 'Gantov Diagram', href: '/diagram' },
    { text: 'Feasibility Study', href: '/feasibility' },
  ]

  const socialLinks = [
    {
      platform: 'Facebook',
      url: 'https://facebook.com/greenclean',
      icon: ASSETS.ICONS.FACEBOOK,
    },
    {
      platform: 'Twitter',
      url: 'https://twitter.com/greenclean',
      icon: ASSETS.ICONS.TWITTER,
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/greenclean',
      icon: ASSETS.ICONS.INSTAGRAM,
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/company/greenclean',
      icon: ASSETS.ICONS.LINKEDIN,
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/greenclean',
      icon: ASSETS.ICONS.YOUTUBE,
    },
  ]

  return (
    <div className={styles.container}>
      <a href='#main' className={styles.skipLink}>
        Skip to main content
      </a>

      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />

      <main id='main'>
        <Hero
          title='Experience the Power of Green Cleaning'
          description='Transform your space with our eco-friendly cleaning services that prioritize your health and the environment. Book today for a cleaner, greener home!'
          image={ASSETS.HERO_IMAGE}
          altText='Eco-friendly cleaning service demonstration'
        />

        <Feature
          tag='Eco-Friendly'
          title='Discover Our Exceptional Cleaning Services'
          description='At Green Clean, we prioritize your health and the environment. Our services use only natural materials to ensure a safe and clean home.'
          image={ASSETS.FEATURE_IMAGE}
          altText='Natural cleaning products and methods'
        />

        <CleaningServices />

        <section
          className={styles.testimonials}
          aria-labelledby='testimonials-title'
        >
          <h2 id='testimonials-title' className={styles.testimonialTitle}>
            Customer Testimonials
          </h2>
          <p className={styles.testimonialSubtitle}>
            Absolutely thrilled with the eco-friendly cleaning services!
          </p>
          <div className={styles.testimonialGrid}>
            <Testimonial
              rating={5}
              quote='The team was professional and left my home sparkling!'
              author={{
                name: 'Emily Johnson',
                title: 'Homeowner, Seattle',
                avatar: ASSETS.TESTIMONIAL_AVATARS.EMILY,
              }}
            />
            <Testimonial
              rating={5}
              quote='I love that they use natural products!'
              author={{
                name: 'Michael Smith',
                title: 'Business Owner, NY',
                avatar: ASSETS.TESTIMONIAL_AVATARS.MICHAEL,
              }}
            />
            <Testimonial
              rating={5}
              quote='Reliable, efficient, and eco-conscious!'
              author={{
                name: 'Sarah Lee',
                title: 'Manager, LA',
                avatar: ASSETS.TESTIMONIAL_AVATARS.SARAH,
              }}
            />
          </div>
        </section>
      </main>

      <Footer socialLinks={socialLinks} />
    </div>
  )
}
