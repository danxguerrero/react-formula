import { useState } from 'react'
import { Joke } from './components/Joke.jsx'

const JOKE = {
    question: "Why don't eggs tell jokes?",
    answer: "They'd crack each other up.",
};

export const RandomJoke = () => {

    const [joke, setJoke] = useState('')
    const [showAnswer, setShowAnswer] = useState(false)

    const handleFetchJoke = async () => {
        try {
            setShowAnswer(false)
            const res = await fetch('https://api.react-formula.com/learning-api/demos/random-joke/jokes')
            if (!res.ok) {
                throw new Error(`HTTP error! status ${res.status}`)
            }
            const jokeData = await res.json()

            setJoke(jokeData)

        } catch (err) {
            console.error('Unable to fetch joke:', err)
        } 

    }

    return <div className='flex flex-col items-center'>
        <Joke joke={joke} showAnswer={showAnswer} setShowAnswer={setShowAnswer} />
        <button
            onClick={() => setShowAnswer(!showAnswer)}
            className='bg-blue-500 p-3 px-8 rounded-lg text-white m-4'
        >
            show answer
        </button>
        <button
            className='bg-purple-700 text-white py-3 px-8 rounded-lg m-4'
            onClick={handleFetchJoke}
        >
            new joke
        </button>
    </div>
}