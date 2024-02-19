import TimeLeft from '@/components/TimeLeft'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center p-24">
            <h1 className="text-2xl font-bold mb-10">Strona główna strony z przygotowaniem do matury</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"/polski"} className="text-blue-500">J. polski</Link>
                    </li>
                    <li>
                        <Link href={"/informatyka"} className="text-blue-500">Informatyka</Link>
                    </li>
                    <li>
                        <Link href={"/angielski"} className="text-blue-500">Angielski</Link>
                    </li>
                    {/* <li>
                        <Link href={"/matematyka"} className="text-blue-500">Matematyka</Link>
                    </li> */}
                </ul>
            </div>

            <TimeLeft></TimeLeft>
        </div>
    )
}
