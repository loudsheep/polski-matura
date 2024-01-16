import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Matura - powtórka',
    description: 'Strona z powturką do matury',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                <link rel="icon" href="/icons/white_transparent.png" type="image/png" sizes="128" media="(prefers-color-scheme: dark)"/>
                <link rel="icon" href="/icons/black_transparent.png" type="image/png" sizes="128" media="(prefers-color-scheme: light)"/>
            </head>

            <body className={inter.className}>
                <nav className="bg-white border-gray-20">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <span className="material-symbols-outlined">
                                token
                            </span>
                            <span className="self-center text-2xl font-semibold whitespace-nowrap">Matura</span>
                        </a>
                        <button data-collapse-toggle="navbar-default" type="button" className="items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <a href="/polski" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Polski</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">O nas</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {children}
            </body>
        </html>
    )
}
