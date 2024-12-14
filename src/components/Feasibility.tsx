import { Navbar } from './Navbar'
import { ASSETS } from '../assets/assets'

const Feasibility = () => {
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
    <div>
      <Navbar logo={ASSETS.LOGO} navLinks={navLinks} />
      <div
        className='container'
        style={{
          marginTop: '70px',
          textAlign: 'justify',
          border: '1px solid #ddd',
          marginBottom: '100px',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Štúdia uskutočniteľnosti pre GreenClean
        </h1>

        <h2>1. Úvod</h2>
        <p>
          Cieľom tejto štúdie uskutočniteľnosti je analyzovať a posúdiť možnosť
          realizácie projektu GreenClean, udržateľného riešenia pre domáce
          upratovanie a organizáciu s dôrazom na ekológiu. Štúdia hodnotí
          technické, finančné, trhové a organizačné aspekty projektu.
        </p>

        <h2>2. Technická uskutočniteľnosť</h2>
        <h3>Technológia a vybavenie:</h3>
        <p>
          GreenClean bude využívať ekologické čistiace prostriedky, opakovateľné
          mikrovlákna a čistiace zariadenia s nízkou spotrebou energie. Tieto
          produkty sú dostupné od miestnych aj medzinárodných dodávateľov.
        </p>
        <h3>Logistika:</h3>
        <p>
          Organizácia poskytne flexibilné upratovacie služby priamo u zákazníka.
          Potrebná infraštruktúra zahŕňa dodávky prepravujúce vybavenie a
          prostriedky.
        </p>

        <h2>3. Trhová uskutočniteľnosť</h2>
        <h3>Cieľový trh:</h3>
        <p>
          Primárne domácnosti so záujmom o ekologický štýl života, sekundárne
          firmy s orientáciou na udržateľnosť. Segment sa stále rozrastá vďaka
          zvyšujúcej sa environmentálnej uvedomelosti.
        </p>
        <h3>Konkurenčná analýza:</h3>
        <p>
          Na trhu existuje len limitovaná konkurencia, ktorá by ponúkala čisto
          ekologické upratovanie. GreenClean má šancu stať sa prémiovou voľbou v
          segmente.
        </p>
        <h3>Marketingové aktivity:</h3>
        <ul>
          <li>Sociálne siete, online reklama</li>
          <li>Spolupráca s lokálnymi environmentálnymi skupinami</li>
          <li>Členské programy pre stálych zákazníkov</li>
        </ul>

        <h2>4. Finančná uskutočniteľnosť</h2>
        <img
          src='/src/images/finance_analyzis.png'
          className='img-fluid py-4'
          alt=''
        />

        <h2>5. Organizačná uskutočniteľnosť</h2>
        <h3>Tím:</h3>
        <ul>
          <li>Zakladatelia s manažérskymi a environmentálnymi znalosťami</li>
          <li>Zamestnanci s preškolením v ekologickom upratovaní</li>
        </ul>
        <h3>Štruktúra:</h3>
        <ul>
          <li>Prevádzkový manažér</li>
          <li>Tím pre marketing a komunikáciu</li>
          <li>Upratovacie tímy</li>
        </ul>

        <h2>6. Riziká a odporúčania</h2>
        <h3>Riziká:</h3>
        <ul>
          <li>Nízky počiatočný dopyt</li>
          <li>
            Neefektívna logistika alebo chýbajúce dodávky ekologických produktov
          </li>
        </ul>
        <h3>Odporúčania:</h3>
        <ul>
          <li>Zaviesť pilotný projekt pre testovanie trhu</li>
          <li>Budovanie silných vzťahov s dodávateľmi a partnermi</li>
          <li>Flexibilná marketingová kampaň</li>
        </ul>

        <h2>7. Záver</h2>
        <p>
          Projekt GreenClean je realizovateľný s vysokým potenciálom pre rast.
          Jeho hlavné prednosti zahŕňajú rastúci dopyt po ekologických
          riešeniach, jedinečnú pozíciu na trhu a možnosť budovania dlhodobých
          partnerstiev.
        </p>
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

export default Feasibility
