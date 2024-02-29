'use client';

import React, { useState } from 'react';

type AccordionProps = {
    accordionText: string,
    children: React.ReactNode,
    className?: string | null,
    showNoteIcon?: number;
};

export default function Accordion({ children, accordionText, className, showNoteIcon }: AccordionProps) {
    // State to track whether the accordion is open or closed
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

    // Function to toggle the accordion
    const toggleAccordion = () => {
        setIsAccordionOpen(prevState => !prevState);
    };

    return (
        <div id={"accordion-flush " + className}>
            <h2 id="accordion-collapse-heading-1">
                <button type="button" onClick={toggleAccordion} className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span className='text-left'>{accordionText}</span>

                    <div className='flex items-center'>
                        {showNoteIcon == 1 && (
                            <span className="material-symbols-outlined text-gray-300 mr-2" title='Zawiera notatki'>
                                description
                            </span>
                        )}
                        {showNoteIcon == 2 && (
                            <span className="material-symbols-outlined text-green-500 mr-2" title='Każde opracowanie ma notatkę'>
                                description
                            </span>
                        )}
                        <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                        </svg>
                    </div>
                </button>
            </h2>

            <div id="accordion-collapse-body-1" className={isAccordionOpen ? "" : "hidden"}>
                <div className="py-5 px-10 border border-b-0 border-gray-200 text-justify">
                    {children}
                </div>
            </div>
        </div>
    );
}
