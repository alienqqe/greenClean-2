import React from 'react'
import styles from '../styles/AboutUs.module.scss'
import { ASSETS } from '../assets/assets'
import pfp from '../../public/images/pfp.jpg'
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Lukáš Bandura',
    role: 'Team Leader',
    description:
      'Lukaš is a dynamic team leader with a knack for inspiring collaboration. With a clear vision and strong organizational skills, he ensures every project meets its goals while fostering a positive team culture.',
    photo: pfp,
  },
  {
    name: 'Bahen Vadym',
    role: 'Designer',
    description:
      'Vadym is a creative designer with a keen eye for detail. He specializes in crafting visually compelling designs that bring ideas to life and enhance user experiences.',
    photo: pfp,
  },
  {
    name: 'Denys Sichka',
    role: 'IT Specialist',
    description:
      'Denys is an IT specialist with expertise in web development. He ensures seamless technology operations and drives innovative solutions for the team.',
    photo: pfp,
  },
  {
    name: 'Patrik Oľšavský',
    role: 'Versatilista',
    description:
      'Patrik is a versatile professional with a wide range of skills and the ability to thrive in any role. His adaptability, combined with a strong work ethic and creativity, allows him to tackle diverse challenges and deliver exceptional results.',
    photo: pfp,
  },
]

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

const AboutUs: React.FC = () => {
  return (
    <div>
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />
      <div className={styles.aboutUsContainer}>
        <section className={styles.introSection}>
          <h1>About Us</h1>
          <h3>
            We are Team Teem - the creators of 100% eco-friendly cleaning
            company GreenClean
          </h3>
          <p>
            At <Link to='/anotation'>GreenClean</Link>, we are dedicated to
            promoting sustainable living and providing eco-friendly cleaning and
            organizational solutions. Our team is passionate about making a
            positive impact on the environment while improving the quality of
            life for our customers.
          </p>
        </section>

        <section className={styles.teamSection}>
          <h2>Meet Our Team</h2>
          <div className={styles.cardContainer}>
            {teamMembers.map((member, index) => (
              <div className={styles.card} key={index}>
                <img
                  src={member.photo}
                  alt={`${member.name}'s photo`}
                  className={styles.memberPhoto}
                  loading='lazy' // Improve performance by lazy loading images
                />
                <h3>{member.name}</h3>
                <h4>{member.role}</h4>
                <p>{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <footer>
          <p>&copy; 2024 GreenClean. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default AboutUs
