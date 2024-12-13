import { Navbar } from './Navbar'
import { ASSETS } from '../assets/assets'
import styles from '../styles/Plan.module.scss'

const Plan = () => {
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
    <main className={styles.planContainer}>
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />
      <header>
        <h1 className={styles.projectTitle}>Biznis plán</h1>
        <p className={styles.projectDescription}>
          <strong className='fs-4'>Názov projektu:</strong>{' '}
          <a href='/' className='fs-4'>
            GreenClean{' '}
          </a>
          <br />
          <br />
          <strong className='fs-4'>Popis projektu:</strong>
        </p>
      </header>

      <article className=''>
        <p className='text-center fs-3'>
          {' '}
          <br /> <a href='/'>GreenClean</a> poskytuje ekologické riešenia
          čistenia a organizácie priestoru pre domácnosti a firmy. Naše služby
          sú navrhnuté tak, aby zlepšili kvalitu života, podporili zdravšie
          prostredie a minimalizovali ekologickú stopu.
        </p>

        <section className={styles.sectionContainer}>
          <h2 className={`${styles.sectionTitle} mt-5`}>Cieľová skupina:</h2>
          <ul className={styles.list}>
            <li>Majitelia domov zameraní na udržateľný životný štýl.</li>
            <li>
              Firmy, ktoré chcú zamestnancom poskytnúť ekologické a zdravšie
              pracovné prostredie.
            </li>
          </ul>
        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Marketingová stratégia:</h2>
          <ul className={`${styles.list} ${styles.marketingStrategy}`}>
            <li>
              Sociálne siete: Propagácia na Facebooku, Instagrame a LinkedIne.
            </li>
            <li>Partnerstvá s lokálnymi dodávateľmi a organizáciami.</li>
            <li>
              Obsahový marketing: Blogy, videá a informačné kampane o
              významnosti ekologických riešení.
            </li>
          </ul>
        </section>

        <section className={styles.sectionContainer}>
          <h2
            className={`${styles.sectionTitle} d-flex align-items-center justify-content-center`}
          >
            Finančný model:
          </h2>
          <ul className={`${styles.list} ${styles.financialModel}`}>
            <li>
              Sadzby za služby: Hodinová sadzba alebo fixná cena za projekt.
            </li>
            <li>
              Doplnkový príjem: Predaj ekologických produktov prostredníctvom
              partnerov.
            </li>
            <li>Možnosť predplatných balíkov pre pravidelných zákazníkov.</li>
          </ul>
        </section>

        <section className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Ciele:</h2>
          <ul className={styles.list}>
            <li>Získať stabilnú zákaznícku základňu v priebehu prvého roka.</li>
            <li>
              Partnerstvo s minimálne piatimi lokálnymi dodávateľmi do šiestich
              mesiacov.
            </li>
            <li>
              Zvýšiť povedomie o ekologických službách v miestnej komunite.
            </li>
          </ul>
        </section>
      </article>

      <footer
        className={styles.footer}
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
    </main>
  )
}

export default Plan
