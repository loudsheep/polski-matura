import React from 'react'

type readingFile = {
    heading :string[],
    type :string,
    text :string[],
    questions: any[]
}
export default function ReadingTwo({heading, text, type, questions}: readingFile) {
  return (
    <div>readingTwo</div>
  )
}
