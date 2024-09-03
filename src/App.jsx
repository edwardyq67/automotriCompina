import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Inicio from './Pagination/Inicio'
import Contacto from './Pagination/Contacto'
import Nosotros from './Pagination/Nosotros'
import NavBar from './NavBarFooter/NavBar'
import Footer from './NavBarFooter/Footer'
import NavInfo from './NavBarFooter/NavInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <NavInfo/>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/nosotros' element={<Nosotros/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </HashRouter>
  )
}

export default App
