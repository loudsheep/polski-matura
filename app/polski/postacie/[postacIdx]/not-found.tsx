import React from 'react'

export default function PostacNotFound() {
    return (
        <div className='w-1/2 mx-auto flex-col items-center'>
            <h1 className='text-center text-3xl font-bold my-10'>Nie znaleziono postaci</h1>
            <a className='text-blue-500 pb-5' href='/polski/postacie'>&lt;&lt; Powrót do strony głównej postacii</a>
        </div>
    )
}
