import Link from "next/link";

export default function PolskiPage() {
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Strona główna do matury z języka polskiego</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"/polski/epoki/"} className="text-blue-500">Epoki literackie</Link>
                    </li>
                    <li>
                        <Link href={"/polski/postacie"} className="text-blue-500">Najważniejsze postacie z lektur</Link>
                    </li>
                    <li>
                        <Link href={"/polski/opracowania"} className="text-blue-500">Opracowania pytań z matury ustnej</Link>
                    </li>
                    <li>
                        <Link href={"/polski/srodki-stylistyczne"} className="text-blue-500">Środki stylistyczne</Link>
                    </li>
                    <li>
                        <Link href={"/polski/rozprawka"} className="text-blue-500">Jak pisać rozprawkę</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
