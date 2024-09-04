import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import { Fadebot, FadeLeft, FadeRight } from '../utility/animation';
import { useNavigate } from 'react-router-dom';
function Inicio() {
  const navigate = useNavigate()
  const [slideIndex, setSlideIndex] = useState(0);
  const sections = Array(4).fill(0).map(() => useInView({
    triggerOnce: true,
    threshold: 0.1,
  }));

  const [ref0, ref1, ref2, ref3] = sections.map(section => section.ref);
  const [inView0, inView1, inView2, inView3] = sections.map(section => section.inView);
  const imagenIncion = [
    {
      id: 1,
      img: "https://boxen.com.mx/wp-content/uploads/2024/04/Banner02.webp",
      opacidad: 0
    },
    {
      id: 2,
      img: "https://boxen.com.mx/wp-content/uploads/2024/04/Banner03.webp",
      opacidad: 50
    },
    {
      id: 3,
      img: "https://boxen.com.mx/wp-content/uploads/2024/04/Banner04.webp",
      opacidad: 50
    },
    {
      id: 4,
      img: "https://boxen.com.mx/wp-content/uploads/2024/04/Banner05.webp",
      opacidad: 50
    },
    {
      id: 5,
      img: "https://boxen.com.mx/wp-content/uploads/2024/04/Banner06.webp",
      opacidad: 0
    }
  ];
  const servicio = [
    {
      id: 1,
      title: "Mantenimiento preeventivo e inspeccion general",
      img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332556/images_app/mantenimiento.webp",
      p: "Confía en nuestra experiencia para mantener tu vehículo en óptimas condiciones, asegurando su rendimiento y seguridad."
      , delay: .2
      , navigate: "/mantenimientoPreventivo"
    },
    {
      id: 2,
      title: "Mantenimiento correctivo",
      img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332648/images_app/mantenimiento-carro-mecanica-Jelpit_1.webp",
      p: " Solucionamos cualquier problema de tu vehículo con eficacia y experiencia, garantizando su funcionamiento seguro."
      , delay: .4
      , navigate: "/mantenimientoCorrectivo"
    }, {
      id: 3,
      title: "Reparacion de motores y transmisiones AT/MT",
      img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332736/images_app/manos-sosteniendo-parte-de-un-motor.webp",
      p: "Restauramos el rendimiento óptimo de tu vehículo, asegurando potencia y eficiencia."
      , delay: .6
      , navigate: "/reparacionMotores"
    }, {
      id: 4,
      title: "Planchado y Pintura",
      img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332828/images_app/pintura_2.webp",
      p: "Devolvemos la apariencia original a tu vehículo con acabados de alta calidad."
      , delay: .8
      , navigate: "/planchadoPintura"
    }
  ]
  return (
    <main>
      <motion.section
        ref={ref0} className="relative w-full bg-black">
        <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-32 px-2 sm:px-0">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={inView0 ? { opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: .6 }}
            className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Especialistas en autos Europeos y Premium</motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView0 ? { opacity: 1 } : {}}
            transition={{ duration: 1.8, delay: .8 }}
            className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Por profesionales para los apasionados de los autos </motion.p>
        </div>
        <Swiper

          initial={{ opacity: 0 }}
          animate={inView0 ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: .6 }}
          spaceBetween={30}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          onSlideChange={(swiper) => setSlideIndex(swiper.activeIndex)}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper  bg-black"
          style={{ height: "90vh" }}
        >
          {imagenIncion.map((imgInicio, index) => (
            <SwiperSlide key={imgInicio.id} className="relative">

              <div
                className="absolute w-full h-full z-20 "
                style={{ backgroundColor: `rgba(0, 0, 0, ${imgInicio.opacidad / 100})` }}
              ></div>
              <motion.div
                initial={{ scale: 1 }}
                animate={slideIndex === index ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 4, delay: 0.5 }}
                className="w-full h-full overflow-hidden"
              >
                <img
                  src={imgInicio.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      <motion.section
        ref={ref1}
        className='container py-20 sm:py-40'>
        <div className="grid sm:flex justify-center  gap-y-10 md:gap-y-20 sm:justify-around gap-x-2">
          <motion.div
            variants={FadeLeft(.2)}
            initial="hidden"
            animate={inView1 ? "visible" : {}}
            onClick={() => navigate("/mantenimientoPreventivo")}
            className="grid  justify-center cursor-pointer items-center text-center gap-2">
            <img className='w-20 md:w-28 hover:scale-105 transition-all duration-200  mx-auto' src="https://boxen.com.mx/wp-content/uploads/2024/04/01.webp" alt="" />
            <h3 className='text-xl md:text-2xl font-poppins font-medium'>SERVICIOS</h3>
            <span className='text-md md:text-lg font-poppins font-normal text-gray-600'>Contamos con preventivos y correctivos</span>
          </motion.div>
          <motion.div
            variants={FadeLeft(.6)}
            initial="hidden"
            animate={inView1 ? "visible" : {}}
            onClick={() => navigate("/contacto")}
            className="grid cursor-pointer justify-center items-center text-center gap-2">
            <img className='w-24 md:w-28 mx-auto hover:scale-105 transition-all duration-200 ' src="https://boxen.com.mx/wp-content/uploads/2024/04/03.webp" alt="" />
            <h3 className='text-xl md:text-2xl font-poppins font-medium'>CONTACTO</h3>
            <span className='text-md md:text-lg font-poppins font-normal text-gray-600'>Agenda una cita con nosotros</span>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        ref={ref2}
        className="relative py-10 sm:py-20 section-background "
      >
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
            <div className="flex flex-col justify-center p-4 font-poppins">
              <motion.h3
                variants={FadeRight(.2)}
                initial="hidden"
                animate={inView2 ? "visible" : {}}
                className="text-2xl text-primary-800  font-semibold mb-2">EL MEJOR TALLER AUTOMOTRIZ PARA AUTOS PREMIUM</motion.h3>
              <motion.p
                variants={FadeRight(.4)}
                initial="hidden"
                animate={inView2 ? "visible" : {}}
                className="text-gray-700 mb-4 text-base">
                Mincone Sport es una empresa de servicio automotriz, creada  en vista de no haber  un taller especialista alternativo de las grandes marcas de lujo y alta gama, con la misma confianza de una concesionaria de marca, Mincone Sport se fundo en 2016, sin embargo su fundador Domenico Mincone con estudios de
                Ingeniería Mecánica Automotriz en Italia, tiene mas de 25 años de experiencia en el rubro, especializándose en autos de alta gama y deportivos
              </motion.p>
              <motion.div
                variants={FadeRight(.6)}
                initial="hidden"
                animate={inView2 ? "visible" : {}}
                onClick={() => navigate("/nosotros")}
                className="flex">
                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Nuestra empresa</button>
              </motion.div>
            </div>
            <motion.div
              variants={FadeLeft(.5)}
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
        className='bg-white py-10 sm:py-20 px-2'>
        <div className="container grid text-black text-start gap-10">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={inView3 ? { opacity: 1 } : {}}
            transition={{ duration: .2, delay: .6 }}
            className='text-3xl md:text-4xl uppercase text-primary-800 font-poppins font-semibold'>nuestro servicios</motion.h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 text-black font-poppins text-lg font-semibold">

            {
              servicio.map(valorServicio => (
                <motion.div
                  variants={Fadebot(valorServicio.delay)}
                  initial="hidden"
                  animate={inView3 ? "visible" : {}}
                  className="max-w-md mx-auto shadow-lg border border-gray-200 rounded-lg  ">
                  <button onClick={() => navigate(valorServicio.navigate)} className='overflow-hidden h-60' >
                    <img className="hover:scale-105  transition-all duration-[500ms] rounded-t-lg" src={valorServicio.img} alt="" />
                  </button>
                  <div className="p-5 grid ">
                    <span >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-primary-700">
                        {valorServicio.title}
                      </h5>
                    </span>
                    <p className="text-gray-700 mb-4 text-base font-normal font-poppins">
                      {valorServicio.p}
                    </p>
                    <div>
                      <button
                        onClick={() => navigate(valorServicio.navigate)}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:ring-4 focus:outline-none "
                      >
                        Saber más
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
                    </div>

                  </div>
                </motion.div>
              ))
            }
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

export default Inicio
