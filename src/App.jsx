import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Pagination/Inicio'
import Contacto from './Pagination/Contacto'
import Nosotros from './Pagination/Nosotros'
import NavBar from './NavBarFooter/NavBar'
import Footer from './NavBarFooter/Footer'
import NavInfo from './NavBarFooter/NavInfo'
import MantenimientoPreventivo from './Pagination/sevicios/MantenimientoPreventivo'
import MantenimientoCorrectivo from './Pagination/sevicios/MantenimientoCorrectivo'
import ReparacionMotores from './Pagination/sevicios/ReparacionMotores'
import PlanchadoPintura from './Pagination/sevicios/PlanchadoPintura'
import ScrollToTop from './ScrollToTop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-x-hidden'>
      <HashRouter>
        <ScrollToTop />
        {/* <NavInfo /> */}
        <NavBar />

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/contacto' element={<Contacto />} />
          {/* servicios */}
          <Route path='/mantenimientoPreventivo' element={<MantenimientoPreventivo />} />
          <Route path='/mantenimientoCorrectivo' element={<MantenimientoCorrectivo />} />
          <Route path='/reparacionMotores' element={<ReparacionMotores />} />
          <Route path='/planchadoPintura' element={<PlanchadoPintura />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>

  )
}

export default App
