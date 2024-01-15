'use client';

import React, { useState } from 'react';

type AccordionProps = {
    accordionText: string,
    children: React.ReactNode,
    className?: string | null,
};

export default function Accordion({ children, accordionText, className }: AccordionProps) {
    // State to track whether the accordion is open or closed
    const [isAccordionOpen, setIsAccordionOpen] = useState<boolean>(false);

    // Function to toggle the accordion
    const toggleAccordion = () => {
        console.log(!isAccordionOpen);
        setIsAccordionOpen(prevState => !prevState);
    };

    return (
        <div id={"accordion-flush " + className}>
            <h2 id="accordion-collapse-heading-1">
                <button type="button" onClick={toggleAccordion} className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                    <span>{accordionText}</span>
                    <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>

            <div id="accordion-collapse-body-1" className={isAccordionOpen ? "" : "hidden"}>
                <div className="py-5 px-10 border border-b-0 border-gray-200">
                    {children}
                </div>
            </div>

            {/* <h2 id="accordion-flush-heading-1">
                <button
                    type="button"
                    onClick={toggleAccordion} // Attach onClick event to toggleAccordion function
                    className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-800 gap-3"
                    data-accordion-target="#accordion-flush-body-1"
                    aria-expanded={isAccordionOpen ? "true" : "false"} // Set aria-expanded based on state
                    aria-controls="accordion-flush-body-1"
                >
                    <span>{accordionText}</span>
                    <svg
                        data-accordion-icon
                        className={`w-3 h-3 transform rotate-${isAccordionOpen ? '180' : '0'} shrink-0`} // Toggle rotation based on state
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2> */}
            {/* Use conditional rendering based on the state to show or hide content */}
            {/* <div id="accordion-flush-body-1" className={"py-1 " + (isAccordionOpen ? "" : "hidden")}>
                {children}
            </div> */}
        </div>
    );
}
