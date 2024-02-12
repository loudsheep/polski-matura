
import { useState } from "react";
export default function UnitOne() {
    const [usedScreen, setUsedScreen] = useState<number | null>(null);
    const [exercise, setExercise] = useState<any>({});
    const [userAnswer, setUserAnswer] = useState<string>('');
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [indexarray, setIndexArray] = useState<[]>([]);
    const ex1 = [
        {
            sentence: "I (0) difficulty sleeping for the last couple of months.",
            fill: "(have)",
            answers: ["have been having"]
        },
        {
            sentence: "Karl (0) from home at the moment.",
            fill: "(work)",
            answers: ["is working"]
        },
        {
            sentence: "Rafaella (0) in Sweden, France and Portugal.",
            fill: "(live)",
            answers: ["has lived"]
        },
        {
            sentence: "My neighbours (0) about our dog barking.",
            fill: "(always complain)",
            answers: ["are always complaining"]
        },
        {
            sentence: "I (0) the oddest message from Karen.",
            fill: "(just have)",
            answers: ["have just had"]
        }
    ];
    const ex2 = [
        {
            sentence: "I knew it would have changed a lot to go back (0) yet.",
            fill: "",
            answers: ["yet"]
        },
        {
            sentence: "Simon always had his head in a book (0) his brother spent most of his time watching television.",
            fill: "",
            answers: ["whereas"]
        },
        {
            sentence: "She should be able to join us for dinner, (0) her plane arrives on time.",
            fill: "",
            answers: ["provided that"]
        },
        {
            sentence: "(0) the plumber still hasn't come, we won't be able to use the bathroom today.",
            fill: "",
            answers: ["As"]
        },
        {
            sentence: "(0) Jessica were here. She would know what to do.",
            fill: "",
            answers: ["If only"]
        },
        {
            sentence: "Nigel loves hiking, (0) does his girlfriend Georgia.",
            fill: "",
            answers: ["as"]
        },
        {
            sentence: "I don't eat meat, (0) does my partner.",
            fill: "",
            answers: ["nor"]
        }
    ];

    const getRandomExercise = () => {
        const randomIndex = Math.floor(Math.random() * ex2.length);
        setExercise(ex2[randomIndex]);
        setIsCorrect(false);
        setUserAnswer('');
    };

    // Function to handle user input
    const handleUserInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    // Function to check user's answer
    const checkAnswer = () => {
        const correctAnswers = exercise.answers;
        if (correctAnswers.includes(userAnswer.trim())) {
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
    };
    return (
        <div className="p-4">
            {usedScreen == null && (
                <div>
                    <h1 className="text-2xl font-bold mb-4">Verbs in Perfect and Continuous Forms</h1>

                    <p className="mb-4">Tense refers to the time when the action of the verb occurs. The action can occur in one of three time periods: past, present, or future. They form a timeline:</p>

                    <div className="flex justify-center items-center mb-4">
                        <div className="w-16 h-0 border-t border-gray-700"></div>
                        <div className="w-16 h-0 border-t border-gray-700 mx-4"></div>
                        <div className="w-16 h-0 border-t border-gray-700"></div>
                    </div>

                    <p className="mb-4">Aspect refers to how we view the action described by the verb with respect to time. We can view the action of the verb as occurring either across or between those periods of time. That is, the times on the timeline can be extended (progressive aspect) or combined (perfect aspect).</p>

                    <h2 className="text-xl font-semibold mt-6 mb-4">1. Simple Aspect</h2>
                    <p className="mb-4">The action is viewed as a fact:</p>

                    <h3 className="text-lg font-semibold mb-2">Present Simple</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>For routine or regularly repeated actions (often with adverbs and expressions of frequency like always, usually, often, sometimes, rarely, never, every Saturday morning, twice a week).</li>
                        <li>For present habits.</li>
                        <li>For permanent situations.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-4">2. Continuous Aspect</h2>
                    <p className="mb-4">The action is continuous:</p>

                    <h3 className="text-lg font-semibold mb-2">Present Continuous</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>Actions happening now.</li>
                        <li>Changing/developing situations.</li>
                        <li>Temporary situations.</li>
                    </ul>

                    <h2 className="text-xl font-semibold mt-6 mb-4">3. Perfect Aspect</h2>
                    <p className="mb-4">The action happened at some unknown time between then, the past, and now, the present time of speaking:</p>

                    <h3 className="text-lg font-semibold mb-2">Present Perfect Simple</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>To talk about states, single or repeated actions over a long period of time up to the present (often with ever/never, often/always).</li>
                        <li>To talk about recent single actions with a present result (often with just, already, yet).</li>
                        <li>To talk about an unfinished period of time up to the present (often with for/since, this week/month/year).</li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-2">Present Perfect Continuous</h3>
                    <ul className="list-disc list-inside mb-4">
                        <li>To talk about a recent activity when the effects of that activity can still be seen.</li>
                        <li>When the activity is temporary.</li>
                        <li>When the action is not complete.</li>
                    </ul>

                    <p>We tend to prefer the present perfect simple for talking about more permanent situations. We prefer to use the present perfect continuous for more temporary situations. Sometimes there is little difference in meaning between the present perfect simple and the present perfect continuous. It is simply a difference in emphasis.</p>

                    <p>Watch out! In American English, it is acceptable to use the past simple in sentences like these: "Did you eat yet?" "I already ate."</p>
                    <br></br>
                    <h2 className="text-2xl font-bold mb-4">4. Stative and Dynamic Verbs</h2>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Dynamic Verbs</h3>
                        <p>Dynamic verbs can be used in simple and progressive aspects. They describe habitual activities or activities taking place at the moment.</p>
                        <ul className="list-disc ml-6">
                            <li>Tim does Pilates.</li>
                            <li>Tim is doing Pilates at the moment so he can't come to the phone.</li>
                        </ul>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Stative Verbs</h3>
                        <p>Stative verbs usually refer to a state or condition which remains static or unchanging. They can be divided into categories referring to emotions, knowledge, possession, communication, and the senses. Stative verbs cannot be used in the continuous form.</p>
                        <ul className="list-disc ml-6">
                            <li>Tina really loves her brother Nigel. (emotion)</li>
                            <li>I don't know where they live. (knowledge)</li>
                            <li>Alexander owns a flat in London and a house in the country. (possession)</li>
                            <li>I promise I won't tell a soul. (communication)</li>
                            <li>That cheese smells awful. (senses)</li>
                        </ul>
                    </div>
                    <p>
                        Some verbs have stative and dynamic meanings. We only use them in continuous forms with their dynamic meaning, but not with their stative meaning.
                    </p>
                    <ul className="list-disc ml-6">
                        <li>I'm feeling a bit run-down. (dynamic; feel = experience a feeling or emotion)</li>
                        <li>I feel that the situation will improve in the near future. (stative; feel = have an opinion)</li>
                    </ul>
                    <br></br>
                    <h2 className="text-2xl font-bold mb-4">5. Conjunctions</h2>
                    <p>We use conjunctions to join ideas within a sentence. They may come at the beginning or in the middle of a sentence, and they improve the cohesion of a text.</p>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Conjunctions for Contrast</h3>
                        <p>Conjunctions used to make a contrast include although, while, whereas, yet.</p>
                        <ul className="list-disc ml-6">
                            <li>The task wasn't difficult, yet Tom found he couldn't complete it on time.</li>
                            <li>While/Although the task wasn't difficult, Tom found himself unable to complete the task on time, whereas Harry finished it quickly.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Conjunctions for Adding Information</h3>
                        <p>Conjunctions used to add information include and and nor.</p>
                        <ul className="list-disc ml-6">
                            <li>He wasn't afraid of taking risks, and he didn't worry, nor did he worry about the potential consequences.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Conjunctions for Giving Conditions</h3>
                        <p>Conjunctions used to give a condition include as long as, provided that, if, unless, and if only.</p>
                        <ul className="list-disc ml-6">
                            <li>As long as/Provided (that) she earned enough money to cover her bills, she didn't care about becoming rich.</li>
                            <li>Unless he improves his performance, he won't be promoted.</li>
                            <li>If only he would have a bit more confidence, he would do really well.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Conjunctions for Giving Reasons</h3>
                        <p>Conjunctions used to give a reason include as, because, since, and so.</p>
                        <ul className="list-disc ml-6">
                            <li>As he hadn't had time to study, he didn't do as well as he'd hoped in the exam.</li>
                        </ul>
                    </div>
                    <button className="text-white px-4 py-2 mb-2 bg-blue-600 hover:bg-blue-700 rounded" onClick={() => setUsedScreen(1)} >EXCERCISE</button>
                </div>
            )}
            {usedScreen == 1 && (
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="mb-4">
                            <p className="mb-2">{exercise.sentence != undefined && String(exercise.sentence).replace("(0)", "..........")}</p>
                            <input
                                className="border border-gray-300 rounded-md px-3 py-2 mr-2 focus:outline-none focus:ring focus:border-blue-500"
                                type="text"
                                value={userAnswer}
                                placeholder="Type your answer here"
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
    );
}
