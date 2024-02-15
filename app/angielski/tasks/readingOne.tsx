type readingFile = {
    heading: string[],
    type: string,
    text: string[],
    questions: any[]
}
export default function ReadingOne({heading, text, type, questions}: readingFile) {
    return (
            <div className="m-8">
                {heading && heading.map((v2: any, idx: any) =>
                    <div key={idx}>
                        <h1 className="text-3xl font-bold mb-4">{heading[idx]}</h1>
                        <p className="text-base text-gray-700 leading-relaxed mb-4">{text[idx]}</p>
                    </div>
                )
                }
                {questions && questions.map((v3: any, idx3: any) =>
                    <div key={idx3} className="m-8">
                        <h4 className="text-xl font-semibold text-blue-500 mb-4">{idx3 + 1}. {v3.question}</h4>
                        <span className="mr-1"><b>A</b></span><input type="radio" name="radio_{idx3}" value={"a"} /><span className="ml-2">{v3.options.A}</span><br></br>
                        <span className="mr-1"><b>B</b></span><input type="radio" name="radio_{idx3}" value={"b"} /><span className="ml-2">{v3.options.B}</span><br></br>
                        <span className="mr-1"><b>C</b></span><input type="radio" name="radio_{idx3}" value={"c"} /><span className="ml-2">{v3.options.C}</span><br></br>
                        <span className="mr-1"><b>D</b></span><input type="radio" name="radio_{idx3}" value={"d"} /><span className="ml-2">{v3.options.D}</span><br></br>
                    </div>
                )}
            </div>
            )
            
}