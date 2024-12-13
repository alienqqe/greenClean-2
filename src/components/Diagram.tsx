import { Navbar } from './Navbar'
import { ASSETS } from '../assets/assets'
import diagram from '../images/diagram.png'

const Diagram = () => {
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
    <div className='d-flex align-items-center justify-content-center flex-column'>
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />
      <div className='pb-5'>
        <img
          style={{
            margin: 'auto',
            marginTop: '150px',
            marginBottom: '40px',
          }}
          src={diagram}
          alt='Gantov Diagram'
          className='img-fluid'
        />
      </div>
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
          width: '100%',
          height: 'auto',
        }}
      >
        <p>&copy; 2024 GreenClean. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Diagram
