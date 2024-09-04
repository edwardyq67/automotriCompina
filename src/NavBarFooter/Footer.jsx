import React from 'react'
import { CgMail, CgMailOpen } from 'react-icons/cg'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { GiBookmarklet } from 'react-icons/gi'
import { VscArrowSmallRight } from 'react-icons/vsc'
import { Navigate, useNavigate } from 'react-router-dom'

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className=' bg-secondary-950'>
      <div className="container px-4 text-white font-poppins grid  sm:flex justify-center sm:justify-between gap-x-4">
        <div className="grid items-center py-10 w-full  bg-secondary-950 gap-2">
          <div className=''>
            <img className='h-[80px] mx-auto' src="https://res.cloudinary.com/dcwdddwnh/image/upload/v1725303756/images_app/logoAutomotriz-removebg-preview-transformed.webp" alt="" />
            <p className='tracking-tighter text-base px-5'>Ofrecer soluciones fiables y duraderas que mantengan los autos en óptimas condiciones, mediante personal capacitado y enfocado en la seguridad y satisfacción del cliente.</p>
          </div>

        </div>
        <div className="grid gap-10 justify-between grid-cols-1 lg:grid-cols-2 xl:flex text-center">
          <div className="block py-10 px-5">
            <h4 className='text-2xl mb-4 font-poppins  font-semibold text-primary-500'>Informacion</h4>
            <ul className='block'>
              <li className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'><FaMapMarkerAlt size={20} />ejemplo de direccion</li>
              <li className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
                <a href="mailto:cesar.delgado@minconesport.pe" className="flex items-center gap-2">
                  <CgMail size={20} /> cesar.delgado@minconesport.pe
                </a>
              </li>
              <li className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
                <a href="https://wa.me/51976536498" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FaWhatsapp size={20} /> 976536498
                </a>
              </li>
              <li className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
                <a href="https://wa.me/51957957609" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FaWhatsapp size={20} /> 957957609
                </a>
              </li>
              <li className='flex gap-2 justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
                <a href="https://wa.me/51986341390" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FaWhatsapp size={20} /> 986341390
                </a>
              </li>
            </ul>
          </div>
          <div className="block py-10 px-5">
            <h4 className='text-2xl mb-4 font-poppins font-semibold text-primary-500'>Navegación</h4>
            <ul className='block items-start '>
              <li onClick={() => navigate("/")} className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'><VscArrowSmallRight size={20} />Inicio</li>
              <li onClick={() => navigate("/nosotros")} className='flex gap-2 mb-1 text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'><VscArrowSmallRight size={20} />Nosotros</li>
              <li onClick={() => navigate("/contacto")} className='flex gap-2 text-base font-light justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'><VscArrowSmallRight size={20} />Contáctanos</li>
            </ul>
          </div>
          <div className="block py-10 px-5">
            <h4 className='text-2xl mb-4 font-poppins font-semibold text-primary-500'>Servicios</h4>
            <ul className='block items-start '>
              <li onClick={() => navigate("/mantenimientoPreventivo")} className='flex text-nowrap text-base gap-2 font-light mb-1 justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105 text-start'><VscArrowSmallRight size={20} />Mantenimiento preeventivo <br /> e inspeccion general</li>
              <li onClick={() => navigate("/mantenimientoCorrectivo")} className='flex text-nowrap text-base gap-2 font-light mb-1 justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105 text-start'><VscArrowSmallRight size={20} />Mantenimiento correctivo</li>
              <li onClick={() => navigate("/reparacionMotores")} className='flex text-nowrap text-base gap-2 font-light mb-1 justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105 text-start'><VscArrowSmallRight size={20} />Reparacion de motores y<br /> transmisiones AT/MT</li>
              <li onClick={() => navigate("/planchadoPintura")} className='flex text-nowrap text-base gap-2 font-light  justify-start items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105 text-start'><VscArrowSmallRight size={20} />Planchado y Pintura</li>
            </ul>
          </div>
          <div className="block py-10 px-5">
            <h4 className='text-2xl mb-4 font-poppins font-semibold text-primary-500 text-start'>Libro de <br /> Reclamaciones</h4>
            <ul className='block items-start '>
              <li className='flex gap-2  items-center justify-center text-white hover:text-primary-400 transition-all duration-200 cursor-pointer  hover:scale-105 hover:filter hover:drop-shadow-[0_7px_10px_rgba(213,230,204,0.5)]'>
                <GiBookmarklet size={80} />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-secondary-950 flex justify-center px-2 w-full py-2 ">
        <span className='container text-white font-base font-poppins'>© Copyright ©2024 Automotriz MINCONE SPORT | <span className='text-white cursor-pointer hover:text-primary-400 transition-all duration-200'>Términos y Condiciones</span></span>
      </div>
    </footer>
  )
}

export default Footer