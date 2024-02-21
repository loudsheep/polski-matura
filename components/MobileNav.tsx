"use client"
import React, { useRef } from 'react'

export default function MobileNav() {

    const mobile_nav = useRef(null)
    
    function changeMenu() {
        if(mobile_nav !== null) {
            mobile_nav.current.classList.toggle("hidden");
        }
    }

    return (
        <div className='block lg:hidden relative'>
            <button className='p-2' onClick={changeMenu}>
                <img src="/icons/hamburger_icon.svg" alt="menu" />
            </button>
            <nav ref={mobile_nav} className='fixed right-0 p-4 bg-white mt-4 mr-4 rounded-lg drop-shadow hidden' id='navbar-mobile'>
                <ul className='m-2 flex flex-col gap-6'>
                    <li>
                        <a href="/informatyka" className="font-semibold text-lg">Informatyka</a>
                    </li>
                    <li>
                        <a href="/polski" className="font-semibold text-lg">Polski</a>
                    </li>
                    <li>
                        <a href="/angielski" className="font-semibold text-lg">Angielski</a>
                    </li>
                    <li>
                        <a href="/o-nas" className="font-semibold text-lg">O nas</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
