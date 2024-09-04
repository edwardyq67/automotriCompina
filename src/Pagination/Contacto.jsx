import React from 'react'
import { BiLogoGmail } from 'react-icons/bi';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fadebot, FadeLeft, FadeRight } from '../utility/animation';
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
  const sections = Array(4).fill(0).map(() => useInView({
    triggerOnce: true,
    threshold: 0.1,
  }));

  const [ref0, ref1, ref2, ref3] = sections.map(section => section.ref);
  const [inView0, inView1, inView2, inView3] = sections.map(section => section.inView);
  return (
    <main className=''>
      <div className="h-[80px] w-full top-0 bg-black"></div>
      <div id="map" className=" bg-cover bg-[50%] bg-no-repeat">
        <GoogleMapEmbed />
      </div>
      <div className="container  mx-auto pb-10 md:pb-20 px-2 ">
        <motion.div
          ref={ref0}
          initial={{ y: 100, opacity: 0 }} // Comienza desplazado hacia abajo y con opacidad 0
          animate={{ y: 0, opacity: 1 }}  // Se mueve a su posición original y la opacidad aumenta a 1
          transition={{
            type: 'spring', // Tipo de transición con efecto de rebote
            stiffness: 100, // Ajusta la fuerza del rebote
            damping: 10, // Ajusta la cantidad de oscilación
            duration: 0.2, // Duración de la animación
            delay: 0.1, // Retraso antes de que comience la animación
          }}
          className="block rounded-lg bg-white px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:py-16  -mt-[100px] backdrop-blur-[30px] border border-gray-300"
        >
          <div className="grid gap-5 lg:flex ">
            <div
              className=" w-full shrink-0 grow-0 basis-auto md:px-3  lg:w-5/12 lg:px-6">
              <form className='grid gap-4'>
                <motion.div
                  variants={FadeRight(.4)}
                  initial="hidden"
                  animate={inView0 ? "visible" : {}}
                  className="" data-te-input-wrapper-init>
                  <label htmlFor="first_name" class="block mb-1 text-sm font-medium text-black">Nombre completo</label>
                  <input type="text" id="first_name" class=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Nombre completo" required />
                </motion.div>
                <motion.div
                  variants={FadeRight(.6)}
                  initial="hidden"
                  animate={inView0 ? "visible" : {}}
                  className="" data-te-input-wrapper-init>
                  <label htmlFor="celular" className="block mb-1 text-sm font-medium text-black">Celular</label>
                  <input type="text" id="celular" className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Celular" required />
                </motion.div>
                <motion.div
                  variants={FadeRight(.8)}
                  initial="hidden"
                  animate={inView0 ? "visible" : {}}
                  className="" data-te-input-wrapper-init>
                  <label htmlFor="correo" className="block mb-1 text-sm font-medium text-black">Correo electronico</label>
                  <input type="text" id="correo" className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5  " placeholder="Correo electronico" required />
                </motion.div>
                <motion.div
                  variants={FadeRight(1)}
                  initial="hidden"
                  animate={inView0 ? "visible" : {}}
                  className="relative" data-te-input-wrapper-init>
                  <label htmlFor="exampleFormControlTextarea1" className="block mb-1 text-sm font-medium text-black">Menssage</label>
                  <textarea
                    className=" border  text-gray-900 text-sm rounded outline-none block w-full p-2.5 "
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder='Menssage'
                  ></textarea>

                </motion.div>
                <motion.div
                  variants={FadeRight(1.2)}
                  initial="hidden"
                  animate={inView0 ? "visible" : {}}
                  className="flex">
                  <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Enviar</button>
                </motion.div>
              </form>
            </div>
            <motion.div
              ref={ref1}
              className=' w-full py-10'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-start items-start gap-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView1 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: .8 }}
                    className='bg-primary-600 p-2 rounded text-white'>
                    <FaMapMarkerAlt size={20} />
                  </motion.span>
                  <motion.div
                    variants={FadeLeft(.2)}
                    initial="hidden"
                    animate={inView1 ? "visible" : {}}
                    className="grid">
                    <h4 className='text-xl text-primary-800  font-semibold'>Ubicacion</h4>
                    <p className='font-poppins text-gray-700 text-base'>Av. Paseo de la Reina, 12345, Lima, Perú</p>
                  </motion.div>
                </div>
                <div className="flex justify-start items-start gap-4">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView1 ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: .8 }}
                    className='bg-primary-600 p-2 rounded text-white'>
                    <FaWhatsapp size={20} />
                  </motion.span>
                  <motion.div
                    variants={FadeLeft(.2)}
                    initial="hidden"
                    animate={inView1 ? "visible" : {}}
                    className="grid gap-1">
                    <h4 className='text-xl text-primary-800  font-semibold'>whatsapp</h4>
                    <ul className='grid gap-1'>
                      <li className='flex gap-2  text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
                        <a href="https://wa.me/51976536498" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <FaWhatsapp size={20} /> 976536498
                        </a>
                      </li>
                      <li className='flex gap-2  text-base justify-start font-light items-center hover:text-primary-400 transition-all duration-200 cursor-pointer hover:translate-x-2 hover:scale-105'>
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
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={inView1 ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: .8 }}
                  className="flex justify-start items-start gap-4">
                  <span className='bg-primary-600 p-2 rounded text-white'>
                    <BiLogoGmail size={20} />
                  </span>
                  <motion.div
                    variants={FadeLeft(.2)}
                    initial="hidden"
                    animate={inView1 ? "visible" : {}}
                    className="grid">
                    <h4 className='text-xl text-primary-800  font-semibold'>Correo</h4>
                    <ul className='grid '>
                      <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>
                        <a href="mailto:cesar.delgado@minconesport.pe">
                          cesar.delgado@minconesport.pe
                        </a>
                      </li>
                      <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>
                        <a href="mailto:dmincone@minconesport.pe">
                          dmincone@minconesport.pe
                        </a>
                      </li>
                      <li className='text-base font-poppins transition-all duration-200 hover:text-primary-500 cursor-pointer text-black hover:scale-105'>
                        <a href="mailto:juancarlos.arias@minconesport.pe">
                          juancarlos.arias@minconesport.pe
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                </motion.div>
                <motion.div
                  ref={ref2}
                  className="flex justify-evenly items-center max-w-60   ">
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: .6, delay: .2 }}
                    className='cursor-pointer hover:scale-105 transition-all duration-200 w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/facebook/facebook-original.svg" />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: .6, delay: .4 }}
                    className='cursor-pointer hover:scale-105 transition-all duration-200 w-12 ml-4' src="https://t3.ftcdn.net/jpg/05/42/99/02/360_F_542990265_jDTgAc4HLdrhAt8TGxGySA4O3TcXtO0j.webp" alt="" />
                  <motion.img
                    initial={{ opacity: 0 }}
                    animate={inView2 ? { opacity: 1 } : {}}
                    transition={{ duration: .6, delay: .6 }}
                    className='cursor-pointer hover:scale-105 transition-all duration-200 w-16' src="https://www.logo.wine/a/logo/TikTok/TikTok-Logomark%26Wordmark-Vertical-Logo.wine.svg" alt="" />
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Contacto