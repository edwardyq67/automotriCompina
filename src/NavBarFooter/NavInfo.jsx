import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { WhatappAcordeon } from './WhatappAcordeon';

function NavInfo() {
    const [isScrolled, setIsScrolled] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 5) {
                setIsScrolled(false);  // Cambia a 'false' para ocultar al hacer scroll
            } else {
                setIsScrolled(true);   // Cambia a 'true' para mostrar cuando no hay scroll
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${isScrolled ? 'hidden md:flex px-4 bg-secondary-950 py-1 z-20 justify-between items-center text-white' : 'hidden'}`}>
            <div className="flex text-white hover:text-primary-600 transition-all duration-200 items-center gap-2">
                <SiGmail  />
                <span className='cursor-pointer'>cesar.delgado@minconesport.pe</span>
            </div>
            <div className="flex gap-0 sm:gap-5">
                <div className="p-2 bg-transparent hover:bg-primary-600 rounded-md cursor-pointer transition-all duration-300">
                    <FaFacebook size={20} />
                </div>
                <div className="p-2 bg-transparent hover:bg-primary-600 rounded-md cursor-pointer transition-all duration-300">
                    <FaInstagram size={20} />
                </div>
                <div className="">
                    <WhatappAcordeon />
                </div>
            </div>
        </div>
    );
}

export default NavInfo;
