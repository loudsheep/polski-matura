import { filesInDirectory, filesToLinkName } from "@/hooks/filesInDirectory";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";

type TopicProps = {
    params: {
        topic: string,
    },
    searchParams?: any,
};

export default function AntykPage(props: TopicProps) {
    const links = filesToLinkName(filesInDirectory(`data/epoki/topics/${props.params.topic}`));

    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <h1 className="text-2xl font-bold my-10">{props.searchParams.pageHeader}</h1>

            <div className="w-full md:w-1/2">
                <ul className="list-disc">
                    {links.map((value, idx) => (
                        <li key={idx}>
                            <Link href={`antyk/${value.link}`} className="text-blue-500">{value.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}