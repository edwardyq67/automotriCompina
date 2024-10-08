import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fadebot, FadeLeft, FadeRight } from '../../utility/animation';
import { useNavigate } from 'react-router-dom';
function ReparacionMotores() {
    const navigate = useNavigate()
    const sections = Array(4).fill(0).map(() => useInView({
        triggerOnce: true,
        threshold: 0.1,
    }));
    const [ref0, ref1, ref2, ref3] = sections.map(section => section.ref);
    const [inView0, inView1, inView2, inView3] = sections.map(section => section.inView);

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
            title: "Planchado y Pintura",
            img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332828/images_app/pintura_2.webp",
            p: "Devolvemos la apariencia original a tu vehículo con acabados de alta calidad."
            , delay: .6
            , navigate: "/planchadoPintura"
        }
    ]
    return (
        <main >
            <motion.section
                ref={ref0}
                className=" h-auto relative bg-black ">
                <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-10 md:pb-20 px-2 sm:px-0">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: .6 }}
                        className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Reparacion de motores y transmisiones AT/MT</motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1.8, delay: .8 }}
                        className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Potencia y precisión restauradas, para que cada kilómetro cuente. </motion.p>
                </div>

                <div className="relative md:h-[100vh] h-[50vh]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: .1 }}
                        className="w-full h-full object-cover  " src="https://boxen.com.mx/wp-content/uploads/2024/04/Banner06.webp" alt="" />
                    <div
                        className="absolute w-full h-full top-0"
                        style={{ backgroundColor: `rgba(0, 0, 0, .6)` }}
                    ></div>
                </div>
            </motion.section>
            <motion.section
                ref={ref1}
                className="container relative py-10 sm:py-20 px-4 "
            >
                <div className=" relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
                        <div className="flex flex-col justify-center p-4 lg:order-1 order-2 font-poppins">
                            <motion.p
                                variants={FadeRight(.2)}
                                initial="hidden"
                                animate={inView1 ? "visible" : {}}
                                className="text-gray-500 mb-4 text-base">
                                La reparación de motores y transmisiones, tanto automáticas (AT) como manuales (MT), es una tarea que requiere conocimiento especializado y atención al detalle. En nuestro taller, entendemos la importancia de estos componentes en el rendimiento general de tu vehículo. Nuestro equipo de expertos está capacitado para diagnosticar y reparar cualquier fallo, utilizando tecnología de punta y piezas de alta calidad. Nos dedicamos a restaurar la potencia y la precisión de tu motor y transmisión, asegurando que tu vehículo funcione de manera óptima y con la fiabilidad que necesitas. Confía en nosotros para mantener tu vehículo en marcha, kilometro tras kilometro, con la máxima eficiencia.
                            </motion.p>
                            <motion.div
                                variants={FadeRight(.4)}
                                initial="hidden"
                                animate={inView1 ? "visible" : {}}
                                onClick={() => navigate("/contacto")}
                                className="flex">
                                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Contactanos</button>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={FadeLeft(.7)}
                            initial="hidden"
                            animate={inView1 ? "visible" : {}}
                            className="flex items-center justify-center lg:order-2 order-1">
                            <img className="md:max-w-[760px] w-full h-full  md:max-h-[500px] rounded-none md:rounded-lg shadow-lg text-base" src="https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332736/images_app/manos-sosteniendo-parte-de-un-motor.webp" alt="Taller Automotriz" />
                        </motion.div>
                    </div>
                </div>
            </motion.section>
            <motion.section
                ref={ref2}
                className='bg-[#f7f7f7] py-10 sm:py-20 px-4'>
                <div className="grid text-black text-start gap-10">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={inView2 ? { opacity: 1 } : {}}
                        transition={{ duration: .2, delay: .6 }}
                        className='text-3xl md:text-4xl text-center uppercase text-primary-800 font-poppins font-semibold'>Otros servicios</motion.h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 text-black font-poppins text-lg font-semibold">

                        {
                            servicio.map(valorServicio => (
                                <motion.div
                                    variants={Fadebot(valorServicio.delay)}
                                    initial="hidden"
                                    animate={inView2 ? "visible" : {}}
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
        </main>
    )
}

export default ReparacionMotores