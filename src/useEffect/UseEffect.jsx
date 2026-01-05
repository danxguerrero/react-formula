import { useState } from "react";
import { Joke } from "./components/Joke";

export const UseEffect = () => {
  const [joke, setJoke] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchRandomJoke =  async () => {
    setShowAnswer(false);
    try {
        const response = await fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const jokeData = await response.json()
        
        setJoke(jokeData);
    } catch (err) {
        console.error("There was an error fetching joke: ", err)
    }
    
  };

  return (
    <div className="flex flex-col items-center py-16">
      {joke ? <Joke joke={joke} showAnswer={showAnswer} /> : null}
      <button
        className="px-8 py-2 m-8 text-lg text-blue-100 bg-blue-500 rounded-md"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        show answer
      </button>
      <button
        className="px-8 py-2 m-8 text-lg rounded-md text-violet-200 bg-violet-600"
        onClick={fetchRandomJoke}
      >
        new joke
      </button>
    </div>
  );
};