import React from 'react'

export default function OpracowanieNotFound() {
    return (
        <div className='w-1/2 mx-auto flex-col items-center'>
            <h1 className='text-center text-3xl font-bold my-10'>Nie znaleziono opracowania</h1>
            <a className='text-blue-500 pb-5' href='/polski/opracowania'>&lt;&lt; Powrót do strony głównej opracowań</a>
        </div>
    )
}
