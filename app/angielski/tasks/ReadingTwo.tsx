import React, { useEffect, useState } from 'react'

type readingFile = {
  heading: string[],
  type: string,
  text: string[],
  questions: any[]
}

export default function ReadingTwo({ heading, text, type, questions }: readingFile) {
  const SetLocalStorage = (item: string[]) => {
    const saving_format = item.join(";");
    localStorage.setItem("taskTwo", saving_format);
  }
  const initialTaskList = localStorage.getItem("taskTwo")?.split(';') || Array(questions[0].options.length).fill("X");
  const [taskList, setTaskList] = useState<any[]>(initialTaskList);
  const answers = ["A", "B", "C", "D", "E", "F", "G"];


  useEffect(() => {
    SetLocalStorage(taskList);
  }, [taskList]);

  const ChangeAnswer = (index: number, answer: string) => {
    let copy = taskList;
    let c = []
    for (let i = 0; i < copy.length; i++) {
      if (i != index) {
        c.push(copy[i])
      } else {
        c.push(answer);
      }
    }
    setTaskList(c)
  }


  return (
    <div>
      {heading && heading.map((v2: any, idx: any) =>
        <div key={v2} className="my-container whitespace-pre-line">
          <h1 className="text-3xl font-bold mb-4">{heading[idx]}</h1>
        </div>
      )
      }
      <div className='flex'>
        <div>
          <div className="m-8">
            {
              text && text.map((value: any, index: number) =>
                <div key={value}>
                  <p className="text-base text-gray-700 leading-relaxed mb-4">{value}</p>
                  {index != text.length - 1 && (
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={taskList[index]} onChange={(e) => ChangeAnswer(index, e.target.value)}>
                      {answers && answers.map((value2: string, index2: number) =>
                        <option key={`${value2} ${index2}`} value={value2}>{value2}</option>
                      )}
                    </select>
                  )}
                </div>
              )
            }
          </div>
        </div>
        <div className='border border-black p-5'>
          {questions[0].options && questions[0].options.map((value: string, id: number) =>
            <p className="text-base text-gray-700 leading-relaxed mb-4" key={value}> {answers[id]}. {value}</p>
          )}
        </div>
      </div>
    </div>
  )
}
