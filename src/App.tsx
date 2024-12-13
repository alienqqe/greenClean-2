import { GreenClean } from './components/GreenClean'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './components/About'
import './global.scss'
import Swot from './components/Swot'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Anotation from './components/Anotation'
import Diagram from './components/Diagram'
import Plan from './components/Plan'
import { useEffect, useState } from 'react'
import Offers from './components/Offers.js'

function App() {
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      {isLoading ? (
        <div
          className='spinner-border text-primary d-flex align-items-center justify-content-center'
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<GreenClean />} />
            <Route path='/about' element={<About />} />
            <Route path='/swot' element={<Swot />} />
            <Route path='/anotation' element={<Anotation />} />
            <Route path='/diagram' element={<Diagram />} />
            <Route path='/plan' element={<Plan />} />
            <Route path='/offers' element={<Offers />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  )
}

export default App
