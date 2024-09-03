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
        <div className={`${isScrolled ? 'flex bg-primary w-full h-10 justify-between items-center text-white px-10' : 'hidden'}`}>
            <div className="flex items-center gap-2">
                <SiGmail color="red" />
                <span>cesar.delgado@minconesport.pe</span>
            </div>
            <div className="flex gap-5">
                <div className="p-1 bg-transparent hover:bg-secondary rounded-md cursor-pointer transition-all duration-300">
                    <FaFacebook size={20} />
                </div>
                <div className="p-1 bg-transparent hover:bg-secondary rounded-md cursor-pointer transition-all duration-300">
                    <FaInstagram size={20} />
                </div>
                <div className="p-1 bg-transparent hover:bg-secondary rounded-md cursor-pointer transition-all duration-300">
                    <WhatappAcordeon />
                </div>
            </div>
        </div>
    );
}

export default NavInfo;
