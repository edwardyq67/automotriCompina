import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import ReactPlayer from 'react-player';
function Inicio() {
  const [slideIndex, setSlideIndex] = useState(0);
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
      img:"http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332556/images_app/mantenimiento.webp",
      p: "Confía en nuestra experiencia para mantener tu vehículo en óptimas condiciones, asegurando su rendimiento y seguridad."
    },
    {
      id: 2,
      title: "Mantenimiento correctivo",
      img:"http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332648/images_app/mantenimiento-carro-mecanica-Jelpit_1.webp",
      p: " Solucionamos cualquier problema de tu vehículo con eficacia y experiencia, garantizando su funcionamiento seguro."
    }, {
      id: 3,
      title: "Reparacion de motores y transmisiones AT/MT",
      img:"http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332736/images_app/manos-sosteniendo-parte-de-un-motor.webp",
      p: "Restauramos el rendimiento óptimo de tu vehículo, asegurando potencia y eficiencia."
    }, {
      id: 4,
      title: "Planchado y Pintura",
      img:"http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332828/images_app/pintura_2.webp",
      p: "Devolvemos la apariencia original a tu vehículo con acabados de alta calidad."
    }
  ]
  return (
    <main>
      <section className="relative w-full">
        <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-32 px-2 sm:px-0">
          <h1 className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Especialistas en autos Europeos y Premium</h1>
          <p className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Por profesionales para los apasionados de los autos </p>
        </div>
        <Swiper
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
          className="mySwiper w-full h-full"
          style={{ height: "100vh" }}
        >
          {imagenIncion.map((imgInicio, index) => (
            <SwiperSlide key={imgInicio.id} className="relative">

              <div
                className="absolute w-full h-full z-20"
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
      </section>
      <section className='container py-20 sm:py-40'>
        <div className="grid sm:flex justify-center  gap-y-10 md:gap-y-20 sm:justify-between gap-x-2">
          <div className="grid justify-center items-center text-center gap-5">
            <img className='w-28 md:w-32 mx-auto' src="https://boxen.com.mx/wp-content/uploads/2024/04/01.webp" alt="" />
            <h3 className='text-xl md:text-2xl font-poppins font-medium'>SERVICIOS</h3>
            <span className='text-md md:text-lg font-poppins font-normal text-gray-600'>Contamos con preventivos y correctivos</span>
          </div>
          <div className="grid justify-center items-center text-center gap-5">
            <img className='w-28 md:w-32 mx-auto' src="https://boxen.com.mx/wp-content/uploads/2024/04/02.webp" alt="" />
            <h3 className='text-xl md:text-2xl font-poppins font-medium'>SERVICIOS</h3>
            <span className='text-md md:text-lg font-poppins font-normal text-gray-600'>Contamos con preventivos y correctivos</span>
          </div>
          <div className="grid justify-center items-center text-center gap-5">
            <img className='w-28 md:w-32 mx-auto' src="https://boxen.com.mx/wp-content/uploads/2024/04/03.webp" alt="" />
            <h3 className='text-xl md:text-2xl font-poppins font-medium'>SERVICIOS</h3>
            <span className='text-md md:text-lg font-poppins font-normal text-gray-600'>Contamos con preventivos y correctivos</span>
          </div>
        </div>
      </section>
      <section
        className="relative py-10 sm:py-20 section-background "
      >
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
            <div className="flex flex-col justify-center p-4 font-poppins">
              <h3 className="text-2xl  font-semibold mb-2">EL MEJOR TALLER AUTOMOTRIZ PARA AUTOS PREMIUM</h3>
              <p className="text-gray-700 mb-4 text-base">
                Mincone Sport es una empresa de servicio automotriz, creada  en vista de no haber  un taller especialista alternativo de las grandes marcas de lujo y alta gama, con la misma confianza de una concesionaria de marca, Mincone Sport se fundo en 2016, sin embargo su fundador Domenico Mincone con estudios de
                Ingeniería Mecánica Automotriz en Italia, tiene mas de 25 años de experiencia en el rubro, especializándose en autos de alta gama y deportivos
              </p>
              <div className="flex">
                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Nuestra empresa</button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img className="w-full h-auto rounded-none md:rounded-lg shadow-lg text-base" src="https://boxen.com.mx/wp-content/uploads/2024/03/empresa.webp" alt="Taller Automotriz" />
            </div>
          </div>
        </div>
      </section>
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
      <section className='bg-white py-10 sm:py-20 px-2'>
        <div className="container grid text-black text-center gap-10">
          <h2 className='text-3xl md:text-4xl uppercase font-poppins font-semibold'>nuestro servicios</h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 text-black font-poppins text-lg font-semibold">

            {
              servicio.map(valorServicio => (
                <div className="max-w-md mx-auto shadow-lg border border-gray-200 rounded-lg  ">
                  <button className='overflow-hidden h-60' >
                    <img className="hover:scale-105  transition-all duration-[500ms] rounded-t-lg" src={valorServicio.img} alt="" />
                  </button>
                  <div className="p-5 grid ">
                    <span >
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        {valorServicio.title}
                      </h5>
                    </span>
                    <p className="text-gray-700 mb-4 text-base font-normal font-poppins">
                      {valorServicio.p}
                    </p>
                    <div>
                      <button
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
                </div>
              ))

            }
           
          </div>
        </div>
      </section>
    </main>
  )
}

export default Inicio
