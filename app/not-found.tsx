import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full flex flex-col justify-center items-center min-h-full mt-20'>
            <h1 className='font-bold text-3xl'>Nie znaleziono</h1>
            <p>Ta ścieżka nie istnieje</p>
            <Link href="/" className='text-blue-500'>Powrót</Link>
        </div>
    )
}