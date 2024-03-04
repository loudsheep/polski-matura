import fs from "fs";
import Markdown from "markdown-to-jsx";

const getTopicMetadata = () => {
    const folder = "public/data/epoki/topics/";
    const file = `${folder}mity.md`;
    const content = fs.readFileSync(file, "utf8");
    return content
}

export default function MityPage(props: any) {
    const slug = props.params.slug;
    const content = getTopicMetadata()
    return (
        <div className="w-3/4 mx-auto flex flex-col items-center">
            <Markdown options = {{
                overrides: {
                    h1: { props: { className: 'text-4xl font-bold mb-6' }},
                    h2: { props: { className: 'text-3xl font-bold mb-4' }},
                    h3: { props: { className: 'text-2xl font-bold mb-3' }},
                    h4: { props: { className: 'text-xl font-bold mb-2' }},
                    p: { props: { className: 'mb-4' }},
                    span: { props: { className: 'inline-block bg-gray-200 text-gray-800 px-2 py-1 rounded-md mb-2' }},
                    ul: { props: { className: 'list-disc pl-5 mb-4' }},
                    ol: { props: { className: 'list-decimal pl-5 mb-4' }},
                    a: { props: { className: 'text-blue-500 hover:text-blue-700' }},
                    code: { props: { className: 'bg-gray-200 text-gray-800 px-2 py-1 rounded-md mb-2' }},
                    pre: { props: { className: 'bg-gray-200 text-gray-800 p-4 mb-4' }},
                    blockquote: { props: { className: 'border-l-4 border-gray-300 p-4 mb-4' }}
                }
            }}>{content}</Markdown>
        </div>
    )
}