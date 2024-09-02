import React, { useState, useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';

export function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="mb-2 ">
            <button
                className="w-full flex justify-between uppercase items-center text-white font-poppins text-left mb-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <FiChevronDown size={20} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                ref={contentRef}
                style={{
                    maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
                }}
                className="transition-max-height duration-200 ease-in-out overflow-hidden pl-4 pr-4"
            >
                <div className="normal-case">{children}</div>
            </div>
        </div>
    );
}
