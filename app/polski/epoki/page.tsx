import Link from "next/link";

type DetailedRevisionType = {
    linkName: string,
    pageHeader: string,
    directory: string,
};

const DeatiledRevision: DetailedRevisionType[] = [
    { linkName: "Więcej Antyku", pageHeader: "Co tam chcesz się dowiedzieć z Antyku? Poniżej znajdziesz najważniejsze zagadnienia", directory: "antyk" },
];

export default function PolskiPageEpoki() {
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Strona główna do matury z języka polskiego</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"/polski/epoki/w-skrocie"} className="text-blue-500">Epoki literackie w skrócie</Link>
                    </li>
                    {/* <li>
                        <Link href={"/polski/epoki/antyk"} className="text-blue-500">Co nieco o Antyku</Link>
                    </li> */}

                    {DeatiledRevision.map((value, idx) => (
                        <li key={idx}>
                            <Link href={{
                                pathname: `/polski/epoki/${value.directory}`,
                                query: {
                                    pageHeader: value.pageHeader
                                },
                            }} className="text-blue-500">{value.linkName}</Link>
                        </li>
                    ))}
            </ul>
        </div>
        </div >
    )
}
