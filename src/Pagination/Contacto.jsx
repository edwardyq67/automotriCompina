import React from 'react'
import { AiFillTikTok } from 'react-icons/ai';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaInstagramSquare, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

function Contacto() {
  const GoogleMapEmbed = () => {

    return (
      <section>
        <iframe
          height="500"
          allowFullScreen
          style={{ border: 0, width: '100%', verticalAlign: 'bottom', display: 'block' }}
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5517.257715941434!2d-77.02974721743261!3d-12.092264877531202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDA1JzMxLjQiUyA3N8KwMDEnMzUuNCJX!5e0!3m2!1ses!2spe!4v1717364254242!5m2!1ses!2spe"
          width="1920"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    );
  };
  return (
    <main className=''>
      <div className="h-[80px] w-full top-0 bg-black"></div>
      <div id="map" className=" bg-cover bg-[50%] bg-no-repeat">
        <GoogleMapEmbed />
      </div>
      <div className="container  mx-auto pb-10 md:pb-20 px-2 ">
        <div
          className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px] border border-gray-300"
        >
          <div className="grid gap-10 lg:flex ">
            <div className=" w-full shrink-0 grow-0 basis-auto md:px-3  lg:w-5/12 lg:px-6">
              <form className='grid gap-4'>
                <div className="" data-te-input-wrapper-init>
                  <label htmlFor="first_name" class="block mb-1 text-sm font-medium text-black">Nombre completo</label>
                  <input type="text" id="first_name" class=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Nombre completo" required />
                </div>
                <div className="" data-te-input-wrapper-init>
                  <label htmlFor="celular" className="block mb-1 text-sm font-medium text-black">Celular</label>
                  <input type="text" id="celular" className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Celular" required />
                </div>
                <div className="" data-te-input-wrapper-init>
                  <label htmlFor="correo" className="block mb-1 text-sm font-medium text-black">Correo electronico</label>
                  <input type="text" id="correo" className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Correo electronico" required />
                </div>
                <div className="relative" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlTextarea1" className="block mb-1 text-sm font-medium text-black">Menssage</label>
                  <textarea
                    className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5 "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder='Menssage'
                  ></textarea>

                </div>
                <div className="flex">
                  <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Enviar</button>
                </div>
              </form>
            </div>
            <div className="grid gap-10">
              <div className="flex justify-start items-center gap-4">
                <span className='bg-primary-600 p-2 rounded text-white'>
                  <FaMapMarkerAlt size={20} />
                </span>
                <div className="grid">
                  <h4 className='text-xl text-primary-800  font-semibold'>Ubicacion</h4>
                  <p className='font-poppins text-gray-700 text-base'>Av. Paseo de la Reina, 12345, Lima, Perú</p>
                </div>
              </div>
              <div className="flex justify-start items-center gap-4">
                <span className='bg-primary-600 p-2 rounded text-white'>
                  <FaWhatsapp size={20} />
                </span>
                <div className="grid">
                  <h4 className='text-xl text-primary-800  font-semibold'>whatsapp</h4>
                  <ul className='flex divide-x-2 gap-2 divide-primary-800'>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>976536498</li>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 pl-2 cursor-pointer text-black hover:scale-105'>957957609</li>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 pl-2 cursor-pointer text-black hover:scale-105'>986341390</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-start items-center  gap-4">
                <span className='bg-primary-600 p-2 rounded text-white'>
                  <BiLogoGmail  size={20} />
                </span>
                <div className="grid">
                  <h4 className='text-xl text-primary-800  font-semibold'>Correo</h4>
                  <ul className='grid gap-1'>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>cesar.delgado@minconesport.pe</li>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>dmincone@minconesport.pe</li>
                    <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>juancarlos.arias@minconesport.pe</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-evenly items-center  ">

                <img className='cursor-pointer hover:scale-105 transition-all duration-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />
                <img className='cursor-pointer hover:scale-105 transition-all duration-200 w-12 ml-4' src="https://t3.ftcdn.net/jpg/05/42/99/02/360_F_542990265_jDTgAc4HLdrhAt8TGxGySA4O3TcXtO0j.webp" alt="" />
                <img className='cursor-pointer hover:scale-105 transition-all duration-200 w-16' src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Vertical-Logo.wine.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contacto