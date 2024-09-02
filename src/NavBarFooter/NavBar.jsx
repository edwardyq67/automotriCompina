import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useNavigate } from 'react-router-dom'
import { AccordionItem } from './AccordionItem'; // Asegúrate de que la ruta sea correcta
import { MdClose } from 'react-icons/md';
import { Accordionpc } from './Accordeonpc';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const NavBarMenu = [
        {
            id: 1,
            titulo: "Inicio",
            Link: "/"
        },
        {
            id: 2,
            titulo: "Servicios",
            Link: "/servicios",
            submenu: [
                { titulo: "servicio1", Link: "/servicio1" },
                { titulo: "servicio2", Link: "/servicio2" },
                { titulo: "servicio3", Link: "/servicio3" },
                { titulo: "servicio4", Link: "/servicio4" }
            ]
        },
        {
            id: 3,
            titulo: "Nosotros",
            Link: "/nosotros"
        },
        {
            id: 4,
            titulo: "Contacto",
            Link: "/contacto"
        }
    ];

    return (
        <nav className='bg-transparent fixed md:px-10 p-2 py-5 z-30 w-full border-b-[.1px] border-gray-800'>
            <div className='flex justify-between items-center relative'>
                <img className='h-[35px]' src="https://boxen.com.mx/wp-content/uploads/2024/04/boxen-white.webp" alt="" />
                <ul className='hidden gap-4 justify-between md:flex'>
                    {NavBarMenu.map(menu => (
                        <li
                            key={menu.id}
                            className='font-poppins uppercase font-medium text-lg text-gray-400  focus:text-white hover:text-white active:text-white transition-all duration-200 hover:shadow-[0_3px_0_-1px_#ffffff] px-2'
                        >
                            {menu.submenu ? (
                                <Accordionpc title={menu.titulo}>
                                    <ul className="">
                                        {menu.submenu.map((sub, idx) => (
                                            <li key={idx} className="text-gray-400 hover:text-white transition-all duration-200 text-lg py-1">
                                                <Link to={sub.Link}>{sub.titulo}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </Accordionpc>
                            ) : (
                                <Link to={menu.Link}>{menu.titulo}</Link>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="md:hidden block" onClick={() => setOpen(!open)}>
                    <GiHamburgerMenu color='white' size={24} />
                </div>
                <div
                    className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${open ? 'translate-x-0' : 'translate-x-full'
                        } bg-white w-80 dark:bg-black`}
                    tabIndex="-1"
                    aria-labelledby="drawer-right-label"
                >
                    <div className="flex justify-end" >
                        <MdClose color='white' size={30} onClick={() => setOpen(!open)} />
                    </div>
                    <ul className='font-semibold px-2 uppercase bg-primary text-black py-5  rounded-lg'>
                        {NavBarMenu.map(menu => (
                            <li key={menu.id} className='mb-4 text-2xl text-white'>
                                {menu.submenu ? (
                                    <AccordionItem title={menu.titulo}>
                                        <ul className="pl-4">
                                            {menu.submenu.map((sub, idx) => (
                                                <li key={idx} className="text-white text-lg py-1">
                                                    <Link to={sub.Link}>{sub.titulo}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </AccordionItem>
                                ) : (
                                    <Link to={menu.Link}>{menu.titulo}</Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
