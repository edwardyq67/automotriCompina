import React, { useState, useRef } from 'react';

export function Accordionpc({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);
console.log(isOpen)
    return (
        <div className="relative">
            <button
                className={`${isOpen?"text-white":"text-gray-400"}text-base  uppercase hover:text-white transition-all duration-200`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `200px` : '0px',
                }}
                className="transition-max-heigh rounded-lg top-0 translate-y-11 translate-x-[-20px] absolute duration-200 ease-in-out overflow-hidden pl-4 pr-4"
            >
                <div
                    className="normal-case py-2 px-4 rounded-md"
                    style={{
                        backdropFilter: 'blur(10px)', // Ajusta el desenfoque aquí
                        backgroundColor: 'rgba(0, 0, 0, 0.6)' // Opcional: color de fondo semitransparente
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}
