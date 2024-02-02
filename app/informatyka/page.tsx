import React from 'react'
import Link from 'next/link'

export default function InformatykaPage() {
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Strona główna do matury z informatyka</h1>

            <div className="w-1/2">
                Link do Githuba, który ma rozwiązania wybranych matur z informatyki oraz zbiór zadań CKE przygotowujący do matury.

                <div className='mt-4'>
                    <Link href={"https://github.com/loudsheep/matura"} target='_blank' className="text-blue-500">https://github.com/loudsheep/matura</Link>
                </div>
            </div>
        </div>
    )
}
