import React from 'react'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fadebot, FadeLeft, FadeRight } from '../utility/animation';
function Nosotros() {
  const sections = Array(4).fill(0).map(() => useInView({
    triggerOnce: true,
    threshold: 0.1,
  }));

  const [ref0, ref1, ref2, ref3] = sections.map(section => section.ref);
  const [inView0, inView1, inView2, inView3] = sections.map(section => section.inView);

  const dueños = [{
    id: 1,
    nombre: "Domenico Mincore",
    img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
    , delay: .5
  },
  {
    id: 2,
    nombre: "Cesar Delgado",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
    , delay: .7
  },
  {
    id: 3,
    nombre: "Juan Carlos Arias",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
    , delay: .9
  }
  ]
  return (
    <main className='bg-white'>
      <motion.section
        ref={ref0}
        className="w-full h-auto relative bg-black ">
        <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-10 md:pb-20 px-2 sm:px-0">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView0 ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: .6 }}
            className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Nosotros</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView0 ? { opacity: 1 } : {}}
            transition={{ duration: 1.8, delay: .8 }}
            className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Cuidamos tu vehículo como si fuera el nuestro. </motion.p>
        </div>

        <div className="relative min-h-40">
          <motion.img
            initial={{ opacity: 0 }}
            animate={inView0 ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: .1 }}
            className=" w-full min-h-60  " src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1725342530/images_app/automotive-01-1920px.webp" alt="" />
          <div
            className="absolute w-full h-full top-0"
            style={{ backgroundColor: `rgba(0, 0, 0, .6)` }}
          ></div>
        </div>
      </motion.section>
      <motion.section
        ref={ref1}
        className='container py-10 md:py-20 px-4'>
        <motion.h2
          variants={FadeLeft(.2)}
          initial="hidden"
          animate={inView1 ? "visible" : {}}
          className="text-4xl md:text-3xl text-primary-800 text-center sm:text-start font-semibold mb-2">Conozca a nuestro equipo</motion.h2>
        <motion.p
          variants={FadeLeft(.4)}
          initial="hidden"
          animate={inView1 ? "visible" : {}}
          className='text-gray-700 mb-10 text-base '>
          Mincone Sport es una empresa de servicio automotriz, creada  en vista de no haber  un taller especialista alternativo de las grandes marcas de lujo y alta gama, con la misma confianza de una concesionaria de
          marca, Mincone Sport se fundo en 2016, sin embargo su fundador Domenico Mincone con estudios de Ingeniería Mecánica Automotriz en Italia, tiene mas de 25 años de experiencia en el rubro, especializándose
          en autos de alta gama y deportivos (como Ferrari,Lamborghini,Alfa & Romeo ,Maserati ,Porsche ,McLaren ,etc)
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            dueños.map(dueno => (
              <motion.div
                variants={Fadebot(dueno.delay)}
                initial="hidden"
                animate={inView1 ? "visible" : {}}
                key={dueno.id} className="mb-10 flex justify-center">
                <div className="max-w-md mx-auto   ">
                  <button className='overflow-hidden h-60 ' >
                    <img className="hover:scale-105 h-full rounded-full transition-all duration-[500ms] " src={dueno.img} alt="" />
                  </button>
                  <div className="p-5 grid text-center">
                    <span >
                      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary-700">
                        {dueno.nombre}
                      </h5>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          }
        </div>
      </motion.section>
      <motion.section
        ref={ref2}
        className="relative py-10 sm:py-20 section-background "
      >
        <div className="container relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
            <div className="flex flex-col justify-center p-4 font-poppins">
              <motion.h3
                variants={FadeRight(.2)}
                initial="hidden"
                animate={inView2 ? "visible" : {}}
                className="text-2xl text-primary-800  font-semibold mb-2">Mision</motion.h3>
              <motion.p
                variants={FadeRight(.4)}
                initial="hidden"
                animate={inView2 ? "visible" : {}}
                className="text-gray-700 mb-4 text-base">
                Proporcionar un servicio de calidad para brindar soluciones fiables y duraderas que conserven los autos en un estado óptimo, eficiente y seguro por medio de personal altamente capacitado, motivado y productivo
                que tiene como principal interés la seguridad y satisfacción de nuestros clientes.
              </motion.p>

            </div>

            <motion.div
            variants={FadeLeft(.7)}
            initial="hidden"
            animate={inView2 ? "visible" : {}}
            className="flex items-center justify-center">
              <img className="w-full h-auto rounded-none md:rounded-lg shadow-lg text-base" src="https://boxen.com.mx/wp-content/uploads/2024/03/empresa.webp" alt="Taller Automotriz" />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
      ref={ref3}
        className="relative py-10 sm:py-20 section-background2 "
      >
        <div className="container relative px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
            <motion.div
            variants={FadeRight(.7)}
            initial="hidden"
            animate={inView3 ? "visible" : {}}
            className="flex items-center justify-center order-2 lg:order-1">
              <img className="w-full h-auto rounded-none md:rounded-lg shadow-lg text-base" src="https://boxen.com.mx/wp-content/uploads/2024/03/empresa.webp" alt="Taller Automotriz" />
            </motion.div>
            <div className="flex flex-col justify-center p-4 font-poppins order-1 lg:order-2">
              <motion.h3 
              variants={FadeLeft(.2)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              className="text-2xl text-secondary-800  font-semibold mb-2">Vision</motion.h3>
              <motion.p
              variants={FadeLeft(.5)}
              initial="hidden"
              animate={inView3 ? "visible" : {}}
              className="text-gray-700 mb-4 text-base">
                Ser reconocidos en el mercado como una de las principales empresas más confiables para la reparación integral automotriz, la mejor alternativa de diagnóstico y reparación autos de alta gama y gestión del
                mantenimiento de flotas vehiculares.
              </motion.p>
            </div>
          </div>
        </div>
      </motion.section>
      <section>
        <ReactPlayer
          url="https://boxen.com.mx/wp-content/uploads/2024/05/Video-Boxen-Marcas-1280X720-Lower.mp4"
          playing={true}    // Inicia la reproducción automáticamente
          loop={true}       // Reproduce el video en bucle
          controls={false}  // Oculta los controles (opcional)
          muted={true}      // Silencia el video (opcional)
          width="100%"      // Ajusta el ancho al contenedor
          height="100%"     // Ajusta la altura al contenedor
        />
      </section>
    </main>
  )
}

export default Nosotros