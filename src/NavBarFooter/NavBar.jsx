import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AccordionItem } from './AccordionItem'; // Asegúrate de que la ruta sea correcta
import { MdClose } from 'react-icons/md';
import { Accordionpc } from './Accordeonpc';

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        // Cerrar el menú cuando la ubicación cambie
        if (open) {
            setOpen(false);
        }
    }, [location]);
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
                { titulo: "Mantenimiento preeventivo e inspeccion general", Link: "/mantenimientoPreventivo" },
                { titulo: "Mantenimiento correctivo", Link: "/mantenimientoCorrectivo" },
                { titulo: "Reparacion de motores y transmisiones AT/MT", Link: "/reparacionMotores" },
                { titulo: "Planchado y Pintura", Link: "/planchadoPintura" }
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
        <nav
            className={`absolute py-5 z-20 w-full border-b-[0.1px] border-gray-800 ${isScrolled ? 'bg-black' : 'bg-transparent'}`}
        >
            <div className="flex bg-blue-600 max-w-[90vw] mx-auto justify-between items-center relative">
                <img
                    className="h-[35px]"
                    src="https://res.cloudinary.com/dcwdddwnh/image/upload/v1725303756/images_app/logoAutomotriz-removebg-preview-transformed.webp"
                    alt="Logo"
                />
                <ul className="hidden gap-4 md:flex">
                    {NavBarMenu.map(menu => (
                        <li
                            key={menu.id}
                            className="font-poppins uppercase font-medium text-base text-gray-400 focus:text-white hover:text-white active:text-white transition-all duration-200 hover:shadow-[0_3px_0_-1px_#ffffff] px-2"
                        >
                            {menu.submenu ? (
                                <Accordionpc title={menu.titulo}>
                                    <ul className="pl-4">
                                        {menu.submenu.map((sub, idx) => (
                                            <li
                                                key={idx}
                                                className="cursor-pointer text-gray-400 hover:text-white transition-all duration-200 text-base py-1"
                                            >
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
                <div className="md:hidden flex" onClick={() => setOpen(!open)}>
                    <GiHamburgerMenu color="white" size={24} />
                </div>
                <div
                    className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform transform ${open ? 'translate-x-0' : 'translate-x-full'} bg-white w-80 dark:bg-secondary-950`}
                    tabIndex="-1"
                    aria-labelledby="drawer-right-label"
                >
                    <div className="flex justify-end">
                        <MdClose color="white" size={30} onClick={() => setOpen(!open)} />
                    </div>
                    <ul className="font-semibold uppercase text-black py-5 rounded-lg">
                        {NavBarMenu.map(menu => (
                            <li key={menu.id} className="mb-4 text-2xl text-white">
                                {menu.submenu ? (
                                    <AccordionItem title={menu.titulo}>
                                        <ul className="pl-4 grid gap-2">
                                            {menu.submenu.map((sub, idx) => (
                                                <li key={idx} className="cursor-pointer text-white text-lg py-1">
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
