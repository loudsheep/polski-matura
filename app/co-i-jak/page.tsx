import Link from "next/link";

export default function CoIJakPage() {
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Strona główna do matury z języka polskiego</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"/co-i-jak/polski-ustny"} className="text-blue-500">j. polski - częśc ustna</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/angielski-ustny"} className="text-blue-500">j. angielski - część ustna</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/matematyka-podstawa"} className="text-blue-500">matematyka - podstawa</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/matematyka-rozszerzenie"} className="text-blue-500">matematyka - rozszerzenie</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/polski-pisemny"} className="text-blue-500">j. polski - część pisemna</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/angielski-pisemny-podstawa"} className="text-blue-500">j. angielski - część pisemna (podstawa)</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/angielski-pisemny-rozszerzenie"} className="text-blue-500">j. angielski - część pisemna (rozszerzenie)</Link>
                    </li>
                    <li>
                        <Link href={"/co-i-jak/informatyka"} className="text-blue-500">informatyka (rozszerzenie)</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
