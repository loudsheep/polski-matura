export default function Main_Page() {
    return (
        <div className="flex flex-col items-center  min-h-screen">
      <h1 className="text-4xl font-bold mt-8 mb-8">English Training Page</h1>
      <img src="/image/british-flag-12.gif" alt="British Flag" className="w-96 h-auto mb-8" />
      <div className="flex">
        <a href="./tasks" className="mx-2 transform transition-transform duration-300 hover:scale-110 bg-blue-500 text-white px-6 py-3 rounded-full">
          Tasks
        </a>
        <a href="./grammar" className="mx-2 transform transition-transform duration-300 hover:scale-110 bg-blue-500 text-white px-6 py-3 rounded-full">
          Grammar
        </a>
        <a href="./vocabulary" className="mx-2 transform transition-transform duration-300 hover:scale-110 bg-blue-500 text-white px-6 py-3 rounded-full">
          Vocabulary
        </a>
      </div>
    </div>
    )
}