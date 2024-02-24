"use client"

type ImportantProps = {
    title: string,
    className?: string,
    children: React.ReactNode,
    theme?: "purple" | "red" | "green" | "yellow" | "blue",
};

export default function Important({ title, children, className = "", theme = "purple" }: ImportantProps) {
    return (
        <div className={`bg-${theme}-200 border-${theme}-600 border-l-4 px-4 my-2 py-2 ${className}`}>
            <h1 className={`text-bold text-xl text-${theme}-900 pb-2`}>{title}</h1>
            {children}
        </div>
    )
}