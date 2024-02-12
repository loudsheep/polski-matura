export default function Main_Page() {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <h1 className="text-4xl font-bold mt-8 mb-8">English Training Page</h1>
            <img src="/image/british-flag-12.gif" alt="British Flag" className="w-96 h-auto mb-8" />
            <div className="flex">
                <a href="/angielski/tasks" className="text-black px-4 py-2 mb-2 mx-4 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2">
                    Tasks
                </a>
                <a href="/angielski/grammar" className="text-black px-4 py-2 mb-2 mx-4 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2">
                    Grammar
                </a>
                <a href="/angielski/vocabulary" className="text-black px-4 py-2 mb-2 mx-4 bg-gray-100 hover:bg-gray-200 rounded border-gray-300 border-2">
                    Vocabulary
                </a>
            </div>
        </div>
    )
}