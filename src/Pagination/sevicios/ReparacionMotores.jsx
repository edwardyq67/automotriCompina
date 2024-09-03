import React from 'react'

function ReparacionMotores() {
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
          }, , {
            id: 3,
            title: "Planchado y Pintura",
            img:"http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332828/images_app/pintura_2.webp",
            p: "Devolvemos la apariencia original a tu vehículo con acabados de alta calidad."
          }
    ]
    return (
        <main>
            <section className="w-full h-auto relative bg-red-400 ">
                <div className="absolute inset-x-0 bottom-0 w-full z-10 grid gap-2 pb-10 md:pb-20 px-2 sm:px-0">
                    <h1 className='text-white uppercase text-4xl md:text-5xl text-center font-bold font-poppins'>Reparacion de motores y transmisiones AT/MT</h1>
                    <p className='text-xl md:text-2xl font-poppins font-medium text-center text-gray-200'>Potencia y precisión restauradas, para que cada kilómetro cuente. </p>
                </div>

                <div className="relative h-[100vh]">
                    <img className="w-full h-full object-cover  " src="https://boxen.com.mx/wp-content/uploads/2024/04/Banner02.webp" alt="" />
                    <div
                        className="absolute w-full h-full top-0"
                        style={{ backgroundColor: `rgba(0, 0, 0, .6)` }}
                    ></div>
                </div>
            </section>
            <section
                className="relative py-10 sm:py-20 px-4 "
            >
                <div className=" relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 z-20">
                        <div className="flex flex-col justify-center p-4 lg:order-1 order-2 font-poppins">

                            <p className="text-gray-500 mb-4 text-base">
                                La reparación de motores y transmisiones, tanto automáticas (AT) como manuales (MT), es una tarea que requiere conocimiento especializado y atención al detalle. En nuestro taller, entendemos la importancia de estos componentes en el rendimiento general de tu vehículo. Nuestro equipo de expertos está capacitado para diagnosticar y reparar cualquier fallo, utilizando tecnología de punta y piezas de alta calidad. Nos dedicamos a restaurar la potencia y la precisión de tu motor y transmisión, asegurando que tu vehículo funcione de manera óptima y con la fiabilidad que necesitas. Confía en nosotros para mantener tu vehículo en marcha, kilometro tras kilometro, con la máxima eficiencia.
                            </p>
                            <div className="flex">
                                <button className="bg-primary-600 hover:bg-primary-700 transition-all duration-200 text-white rounded shadow-lg py-3 px-10">Contactanos</button>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:order-2 order-1">
                            <img className=" rounded-none md:rounded-lg shadow-lg text-base" src="http://res.cloudinary.com/dcwdddwnh/image/upload/v1725332736/images_app/manos-sosteniendo-parte-de-un-motor.webp" alt="Taller Automotriz" />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-white py-10 sm:py-20 px-4'>
                <div className="grid text-black text-center gap-10">
                    <h2 className='text-4xl md:text-5xl text-start uppercase text-primary-800 font-poppins font-medium'>servicios</h2>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 text-black font-poppins text-lg font-semibold">

                        {
                            servicio.map(valorServicio => (
                                <div className="max-w-md mx-auto shadow-lg border border-gray-200 rounded-lg  ">
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
                                </div>
                            ))

                        }

                    </div>
                </div>
            </section>
        </main>
    )
}

export default ReparacionMotores