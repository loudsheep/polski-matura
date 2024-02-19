import dynamic from 'next/dynamic';
import Link from 'next/link';

const TimeLeft = dynamic(() => import("@/components/TimeLeft"), {
    ssr: false,
});

export default function Home() {
    return (
        <div className="w-11/12 md:w-5/6 lg:w-3/4 xl:w-1/2 mx-auto flex-col items-center pt-12">
            <h1 className="text-2xl font-bold mb-10">Strona główna strony z przygotowaniem do matury</h1>

            <div className="w-full md:w-1/2 pl-2">
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
