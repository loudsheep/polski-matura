import React, { useEffect } from 'react'

type readingFile = {
    heading :string[],
    type :string,
    text :string[],
    questions: any[]
}
export default function ReadingTwo({heading, text, type, questions}: readingFile) {
  useEffect(() => {
    console.log(localStorage.getItem("taskOne"))
  }, [])
  return (
    <div>readingTwo</div>
  )
}
