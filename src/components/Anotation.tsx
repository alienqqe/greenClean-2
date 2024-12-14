import { Navbar } from './Navbar'
import { ASSETS } from '../assets/assets'
import style from '../styles/Anotation.module.scss'

const Anotation = () => {
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
  return (
    <div className={`${style.annotationContainer}`}>
      {/* Navbar */}
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />

      {/* Main Content */}
      <main
        className={`${style.anotation}  d-flex align-items-center justify-content-center flex-column`}
      >
        <h1>
          Anotácia projektu: <a href='/'>GreenClean</a>
        </h1>
        <h4 className='py-3'>
          <a href='/'>GreenClean</a> je inovatívna služba, ktorá prináša
          ekologické riešenia pre čistenie a organizáciu domácnosti a firemných
          priestorov. Zameriavame sa na zlepšenie kvality života našich
          zákazníkov prostredníctvom používania udržateľných a netoxických
          produktov, ktoré sú šetrné k životnému prostrediu.
        </h4>
        <h4 className='py-3'>
          Naša služba pomáha minimalizovať ekologickú stopu a podporuje životný
          štýl založený na udržateľných princípoch. Cieľová skupina GreenClean
          zahŕňa majiteľov domov, ktorí sa snažia žiť v súlade s princípmi
          udržateľného života, a firmy, ktoré chcú svojim zamestnancom poskytnúť
          zdravšie a ekologickejšie pracovné prostredie.
        </h4>
        <h4 className='py-3'>
          Prostredníctvom blogov, workshopov a informačných kampaní sa snažíme
          šíriť povedomie o ekologických riešeniach a motivovať ľudí k zmene
          svojich zvykov.
        </h4>
      </main>
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

export default Anotation
