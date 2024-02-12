import { useState } from "react";
export default function UnitTwo() {
    const [usedScreen, setUsedScreen] = useState<number | null>(null);
    const [exercise, setExercise] = useState<any>({});
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [indexarray, setIndexArray] = useState<[]>([]);
    const ex1 = [
        {
            sentence: "The manager, (0) number I tried to call, just rang me back.",
            fill: "whose/which",
            answer: ["whose"]
        },
        {
            sentence: "My neighbour, with (0) I've had lots of arguments, turned out to be a really kind person.",
            fill: "whose/whom",
            answer: ["whom"]
        },
        {
            sentence: "My passport was in my car (0) I'd left it the night before.",
            fill: "which/where",
            answer: ["where"]
        },
        {
            sentence: "I had to walk to work, (0) was why I was late.",
            fill: "that/which",
            answer: ["which"]
        },
        {
            sentence: "It was a friend (0) told me about this restaurant.",
            fill: "whose/that",
            answer: ["that"]
        },
        {
            sentence: "My grandfather, (0) will be 90 soon, still walks 5 km every day.",
            fill: "that/who",
            answer: ["who"]
        }
    ];
    
    const [selectedDataset, setSelectedDataset] = useState('');

    const handleChange = (event: any) => {
        setSelectedDataset(event.target.value);
    };

    const getRandomExercise = () => {
        const randomIndex = Math.floor(Math.random() * ex1.length);
            setExercise(ex1[randomIndex]);
            setIsCorrect(false);
            setUserAnswer('');
    };


    // Function to handle user input
    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    // Function to check user's answer
    const checkAnswer = () => {
        const correctAnswers = exercise.answer;
        if (correctAnswers.includes(userAnswer.trim())) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    return (
        <div>
            {usedScreen == null && (<div>
            <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Narrative Tenses</h1>

                {/* Past Simple */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Past Simple</h2>
                    <p>Used to talk about finished events in the past:</p>
                    <ul className="list-disc list-inside">
                        <li>To talk about specific time events: "I spoke to my sister this morning."</li>
                        <li>To describe a sequence of events: "She stood up, looked around the room and began to speak."</li>
                        <li>To discuss past habits: "Did you play tennis when you were younger?"</li>
                        <li>To describe past states: "When I was a baby, I suffered from persistent earaches."</li>
                        <li>In reported speech: "She claimed she knew nothing about the robbery."</li>
                    </ul>
                </div>

                {/* Past Continuous */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Past Continuous</h2>
                    <p>Used to describe actions in progress in the past:</p>
                    <ul className="list-disc list-inside">
                        <li>To describe ongoing actions: "He was lying in a hammock with a hat over his eyes."</li>
                        <li>To discuss temporary situations: "Susan was studying architecture in the early 1970s."</li>
                        <li>To talk about interrupted events: "I was just falling asleep when the phone rang."</li>
                        <li>To describe simultaneous actions: "While I was flying back from Australia, she was trying to get in touch with me on my mobile."</li>
                        <li>To talk about anticipated events that did not happen: "They were planning to get married but then he met someone else."</li>
                    </ul>
                </div>

                {/* Past Perfect */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Past Perfect</h2>
                    <p>Used to refer to a time earlier than another past time:</p>
                    <ul className="list-disc list-inside">
                        <li>To make the order of events clear: "Everyone had been invited to the meeting so I don't understand why she claimed not to know about it."</li>
                        <li>In reported speech: "They said they had met before."</li>
                    </ul>
                </div>

                {/* Past Perfect Continuous */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-2">Past Perfect Continuous</h2>
                    <p>Used to talk about an action in progress over a period of time that concluded in the past:</p>
                    <p>"I had been living in London for about a month when I met William."</p>
                </div>

                {/* Other Verb Forms */}
                <div>
                    <h2 className="text-xl font-semibold mb-2">Other Verb Forms</h2>
                    <p>Used to talk about the past: used to and would</p>
                    <p>"Everyone used to get milk delivered but now we all buy it in the supermarket."</p>
                    <p>"I didn't use to enjoy sport very much at school but now I love it."</p>
                    <p>We use "would" to talk about past habits and repeated actions but NOT about past states, thoughts, emotions, etc.</p>
                </div>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-bold mb-4">Defining and Non-defining Relative Clauses</h2>

                {/* Defining Relative Clauses */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Defining Relative Clauses</h3>
                    <p>Defining relative clauses contain essential information:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>If the relative clause is the object of the sentence, the relative pronoun can be omitted.</li>
                        <li>If the relative clause is the subject of the sentence, the relative pronoun can't be omitted.</li>
                        <li>The relative clause defines or identifies the person, thing, time, place, or reason.</li>
                        <li>"That" can be used instead of "who" or "which".</li>
                        <li>The relative pronoun can be left out if it is the object of the verb in the relative clause.</li>
                        <li>Commas are used before and after the relative clause.</li>
                    </ul>
                </div>

                {/* Non-defining Relative Clauses */}
                <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-2">Non-defining Relative Clauses</h3>
                    <p>Non-defining relative clauses provide extra information and follow either the subject or object of a sentence:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>The relative clause gives extra information which can be omitted.</li>
                        <li>"That" cannot be used instead of "who" or "which".</li>
                        <li>Commas are used before and after the relative clause.</li>
                        <li>Leaving out the commas in a non-defining relative clause can change the meaning of a sentence.</li>
                    </ul>
                </div>

                {/* Prepositions in Relative Clauses */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Prepositions in Relative Clauses</h3>
                    <p>Prepositions can come before or after the relative pronoun, depending on whether the sentence is formal or informal:</p>
                    <ul className="list-disc list-inside mb-4">
                        <li>The person to whom I spoke told me the vacuum cleaner would be delivered this morning. (formal)</li>
                        <li>Mrs. Evans, who I talked to just now, sends her regards. (informal)</li>
                    </ul>
                </div>
                <button className="text-white px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => setUsedScreen(1)} >EXCERCISE</button>
            </div>
            </div>)}
            {usedScreen == 1 && (
                <div>
                    <div className="flex items-center justify-center">
                        <div className="flex flex-col items-center">
                            <label htmlFor="dataset" className="text-lg font-semibold mb-2">Choose Exercise:</label>
                            <select
                                id="dataset"
                                className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-500"
                                value={selectedDataset}
                                onChange={handleChange}
                            >
                                <option value="">Select Exercise</option>
                                <option value="ex1">Exercise 1</option>
                                {/* <option value="ex2">Exercise 2</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <p className="mb-2">{exercise.sentence != undefined && String(exercise.sentence).replace("(0)", "..........")}   {exercise.fill != '' && (<p>{exercise.fill}</p>)}</p>
                            <input
                                className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-500"
                                type="text"
                                value={userAnswer}
                                placeholder="Type your answer here"
                                onChange={handleUserInput}
                            />
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                                onClick={checkAnswer}
                            >
                                Check Answer
                            </button>
                            {isCorrect && <p className="text-green-500 mt-2">Your answer is correct!</p>}
                            {!isCorrect && userAnswer !== '' && <p className="text-red-500 mt-2">Incorrect answer. Try again!</p>}
                        </div>
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500"
                            onClick={getRandomExercise}
                        >
                            Generate New Exercise
                        </button>
                        <button
                            className="bg-gray-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-500 mt-4"
                            onClick={() => setUsedScreen(null)}
                        >
                            Close Tab
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}