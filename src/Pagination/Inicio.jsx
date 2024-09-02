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
  return (
    <main>
      <section className="relative w-full">
        <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-32 px-2 sm:px-0">
          <h1 className='text-white uppercase text-5xl text-center font-bold font-poppins'>Especialistas en autos Europeos y Premium</h1>
          <p className='text-2xl font-poppins font-medium text-center text-gray-200'>Por profesionales para los apasionados de los autos </p>
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
        <div className="grid sm:flex justify-center gap-y-20 sm:justify-between gap-x-2">
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
              <h3 className="text-2xl font-semibold mb-2">EL MEJOR TALLER AUTOMOTRIZ PARA AUTOS PREMIUM</h3>
              <p className="text-gray-700 mb-4 text-base">
                Boxen es un centro de alta ingeniería automotriz multimarca, con más de 15 años de experiencia en México, desarrollado específicamente para satisfacer las necesidades de servicios preventivos y correctivos de nuestros clientes, garantizando cada uno de los trabajos realizados mediante los más altos estándares de calidad, personal altamente calificado y herramienta especializada de punta.
              </p>
              <div className="flex">
                <button className="bg-gray-950 hover:bg-gray-900 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Nuestra empresa</button>
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
    </main>
  )
}

export default Inicio