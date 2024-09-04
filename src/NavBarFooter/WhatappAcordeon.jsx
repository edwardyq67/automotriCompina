import React, { useState, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatappAcordeon({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="relative">
            <button
                className="flex justify-between p-2 bg-transparent hover:bg-primary-600 rounded-md cursor-pointer transition-all duration-300 uppercase items-center text-white font-poppins text-left"
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
            >
                <span><FaWhatsapp size={20} /></span>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
                onMouseOver={() => setIsOpen(true)}
                onMouseOut={() => setIsOpen(false)}
                className="z-30 absolute translate-x-[-100px]  bg-secondary-950  transition-max-height duration-100 ease-in-out overflow-hidden pl-4 pr-4 rounded"
            >
                <div className="normal-case flex my-2 p-2 rounded hover:bg-primary-600 md:opacity-70 opacity-100 md:hover:opacity-100 transition-all duration-200 justify-center items-center gap-2">
                    <span className='text-green-500'><FaWhatsapp size={20} /></span>976536498
                </div>
                <div className="normal-case flex my-2 p-2 hover:bg-primary-600  rounded md:opacity-70 opacity-100 md:hover:opacity-100 transition-all duration-200 justify-center items-center gap-2">
                    <span className='text-green-500'><FaWhatsapp size={20} /></span>957957609
                </div>
                <div className="normal-case flex my-2 p-2 hover:bg-primary-600  rounded md:opacity-70 opacity-100 md:hover:opacity-100 transition-all duration-200 justify-center items-center gap-2">
                    <span className='text-green-500'><FaWhatsapp size={20} /></span>986341390
                </div>
            </div>
        </div>
    );
}
