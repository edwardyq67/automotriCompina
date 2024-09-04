import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Fadebot, FadeLeft, FadeRight } from '../../utility/animation';
function MantenimientoPreventivo() {
    const sections = Array(4).fill(0).map(() => useInView({
        triggerOnce: true,
        threshold: 0.1,
    }));
    const [ref0, ref1, ref2, ref3] = sections.map(section => section.ref);
    const [inView0, inView1, inView2, inView3] = sections.map(section => section.inView);

    const servicio = [
        {
            id: 1,
            title: "Mantenimiento correctivo",
            img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332648/images_app/mantenimiento-carro-mecanica-Jelpit_1.webp",
            p: " Solucionamos cualquier problema de tu vehículo con eficacia y experiencia, garantizando su funcionamiento seguro."
            , delay: .2
        }, {
            id: 2,
            title: "Reparacion de motores y transmisiones AT/MT",
            img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332736/images_app/manos-sosteniendo-parte-de-un-motor.webp",
            p: "Restauramos el rendimiento óptimo de tu vehículo, asegurando potencia y eficiencia."
            , delay: .4
        }, {
            id: 3,
            title: "Planchado y Pintura",
            img: "https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332828/images_app/pintura_2.webp",
            p: "Devolvemos la apariencia original a tu vehículo con acabados de alta calidad."
            , delay: .6
        }
    ]
    return (
        <main>
            <motion.section
                ref={ref0}
                className="w-full h-auto relative bg-black ">
                <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-10 md:pb-20 px-2 sm:px-0">
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1.2, delay: .6 }}
                        className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Mantenimiento preeventivo e inspeccion general</motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1.8, delay: .8 }}
                        className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Mantén tu camino seguro con nuestro mantenimiento preventivo. </motion.p>
                </div>

                <div className="relative h-[100vh]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={inView0 ? { opacity: 1 } : {}}
                        transition={{ duration: 1, delay: .1 }}
                        className="w-full h-full object-cover  " src="https://boxen.com.mx/wp-content/uploads/2024/04/Banner02.webp" alt="" />
                    <div
                        className="absolute w-full h-full top-0"
                        style={{ backgroundColor: `rgba(0, 0, 0, .6)` }}
                    ></div>
                </div>
            </motion.section>
            <motion.section
                ref={ref1}
                className="relative py-10 sm:py-20 px-4 "
            >
                <div className=" relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
                        <div className="flex flex-col justify-center p-4 font-poppins lg:order-1 order-2">
                            <motion.p
                                variants={FadeRight(.2)}
                                initial="hidden"
                                animate={inView1 ? "visible" : {}}
                                className="text-gray-500 mb-4 text-base ">
                                Elegirnos significa optar por la tranquilidad y la seguridad en cada kilómetro que recorres. Nuestro servicio de mantenimiento preventivo e inspección general automotriz está diseñado para identificar y corregir posibles problemas antes de que se conviertan en costosas reparaciones o situaciones de riesgo. Con un enfoque meticuloso y un equipo de expertos altamente capacitados, aseguramos que tu vehículo esté siempre en óptimas condiciones, lo que te permite disfrutar de un rendimiento confiable y una mayor durabilidad. Porque entendemos que tu seguridad y la de tus seres queridos es lo más importante, estamos comprometidos a brindarte un servicio de calidad que te ofrezca confianza en cada viaje.
                            </motion.p>
                            <motion.div
                                variants={FadeRight(.4)}
                                initial="hidden"
                                animate={inView1 ? "visible" : {}}
                                className="flex">
                                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Contactanos</button>
                            </motion.div>
                        </div>
                        <motion.div
                            variants={FadeLeft(.7)}
                            initial="hidden"
                            animate={inView1 ? "visible" : {}}
                            className="flex items-center justify-center  lg:order-2 order-1">
                            <img className="md:max-w-[760px] w-full h-full md:max-h-[500px] rounded-none md:rounded-lg shadow-lg text-base" src="https://res.cloudinary.com/dcwdddwnh/image/upload/v1725332556/images_app/mantenimiento.webp" alt="Taller Automotriz" />
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
                                    <button className='overflow-hidden h-60' >
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

export default MantenimientoPreventivo