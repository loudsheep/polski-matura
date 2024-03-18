import Link from "next/link";

type DetailedRevisionType = {
    linkName: string,
    pageHeader: string,
    directory: string,
};

const DeatiledRevision: DetailedRevisionType[] = [
    { linkName: "Więcej Antyku", pageHeader: "Co tam chcesz się dowiedzieć z Antyku? Poniżej znajdziesz najważniejsze zagadnienia", directory: "antyk" },
    { linkName: "Co chcesz wiedzieć o Średniowieczu bratku?", pageHeader: "Co tam chcesz się dowiedzieć ze Średniowiecza? Poniżej znajdziesz najważniejsze zagadnienia", directory: "sredniowiecze" },
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
