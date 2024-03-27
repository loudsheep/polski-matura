import Link from "next/link";

export default function MatematykaPage() {
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Strona główna do matury z matematyki (rozszerzonej)</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"/matematyka/liczby-zbiory"} className="text-blue-500">Liczby rzeczywiste, zbiory</Link>
                    </li>
                    <li>
                        <Link href={"/matematyka/funkcje"} className="text-blue-500">Funkcje</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
