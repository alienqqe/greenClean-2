import React from 'react'
import style from '../styles/Offers.module.scss'
import { Navbar } from './Navbar'
import { ASSETS } from '../assets/assets'

const Offers: React.FC = () => {
  const services = [
    {
      title: 'Residential Cleaning',
      description:
        'Eco-friendly cleaning for your home using non-toxic, biodegradable products.',
      icon: '🏠',
      price: '20€/h',
    },
    {
      title: 'Office Cleaning',
      description: 'Sustainable cleaning solutions for a healthier workplace.',
      icon: '🏢',
      price: '25€/h',
    },
    {
      title: 'Carpet Cleaning',
      description:
        'Ecological carpet cleaning that removes dirt and allergens without harmful chemicals.',
      icon: '🏽',
      price: '10€/h ',
    },
    {
      title: 'Window Cleaning',
      description:
        'Streak-free, eco-conscious window cleaning for homes and businesses.',
      icon: '🪟',
      price: '12€/h',
    },
    {
      title: 'Deep Cleaning',
      description:
        'Thorough, eco-safe cleaning for those hard-to-reach places.',
      icon: '🧹',
      price: '25€/h',
    },
    {
      title: 'Monthly House Care Package',
      description:
        'Full care house package. Includes window cleaning, carpet cleaning and throrough residential cleaning once a week.',
      icon: '🏠📅✨',
      price: '120€ / month',
    },
    {
      title: 'Monthly Office Care Package',
      description:
        'Full care office package. Includes window cleaning and throrough office cleaning once a week.',
      icon: '🏢📅✨',
      price: '100€ / month',
    },
    {
      title: 'Ultimate Package',
      description:
        'Full care package for 2 buildings of your choice. Includes window cleaning, carpet cleaning and deep cleaning TWICE a week.',
      icon: '🎯🌟',
      price: '300€ / month',
    },
  ]

  const ecoProducts = [
    'Non-toxic, biodegradable cleaning agents',
    'Plant-based disinfectants',
    'Compostable sponges and cloths',
    'Essential oil-based air fresheners',
    'Recyclable and reusable cleaning tools',
  ]
  const navLinks = [
    { text: 'Home', href: '/' },
    { text: 'Anotation', href: '/anotation' },
    { text: 'About Us', href: '/about' },
    { text: 'What we offer', href: '/offers' },
    { text: 'SWOT', href: '/swot' },
    { text: 'Business plan', href: '/plan' },
    { text: 'Gantov Diagram', href: '/diagram' },
  ]

  return (
    <>
      {' '}
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />
      <div className={style.greenCleanServices}>
        <header className={style.servicesHeader}>
          <h1>Our Services</h1>
          <p>Eco-friendly cleaning solutions tailored to your needs.</p>
        </header>
        <div className={style.servicesList}>
          {services.map((service, index) => (
            <div className={style.serviceCard} key={index}>
              <div className={style.icon}>{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <br />
              <div className={style.price}>{service.price}</div>
              <p></p>
            </div>
          ))}
        </div>
        <section className={`${style.ecoProducts} mb-5 `}>
          <h2>Which products are we using?</h2>
          <ul>
            {ecoProducts.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </ul>
        </section>
        <footer
          style={{
            marginTop: '50px',
            fontSize: '0.9rem',
            color: '#777',
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid #ddd',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }}
        >
          <p>&copy; 2024 GreenClean. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export default Offers
