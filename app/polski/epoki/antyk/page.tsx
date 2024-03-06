import Link from "next/link";
// import fs from "fs";

// TO WSZYSTKO CO JEST ZAKOMENTOWANE, MIAŁO BYC AUTOMATYCZNYM ROBIENIEM PODSTRON Z TEMATAMI, ALE COŚ NIE DZIAŁA ;-;

// const getTopicMetadata = () => {
//     const folder = "public/data/epoki/topics";
//     const files = fs.readdirSync(folder);
//     const markdownTopics = files.filter((file) => file.endsWith(".md"));
//     const slugs = markdownTopics.map((file) => file.replace(".md", ""));
//     return slugs
// }

export default function AntykPage(){
    // const topicMetada = getTopicMetadata();
    // const listTopics = topicMetada.map((slug) => {
    //     <div>
    //         <Link href={`/topics/${slug}`}>{slug}</Link>
    //     </div>
    // })
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">Co tam chcesz się dowiedzieć z Antyku? Poniżej znajdziesz najważniejsze zagadnienia</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    <li>
                        <Link href={"antyk/biblia"} className="text-blue-500">Biblia</Link>
                    </li>
                    <li>
                        <Link href={"antyk/mity"} className="text-blue-500">Mity</Link>
                    </li>
                    <li>
                        <Link href={"antyk/iliada"} className="text-blue-500">Iliada</Link>
                    </li>
                    <li>
                        <Link href={"antyk/antygona"} className="text-blue-500">Antygona</Link>
                    </li>
                    <li>
                        <Link href={"antyk/tyrteizm"} className="text-blue-500">Tyrteizm</Link>
                    </li>
                    {/* 
                        Pozostałe tu będą
                    */}
                </ul>
            </div>
        </div>
    )
}