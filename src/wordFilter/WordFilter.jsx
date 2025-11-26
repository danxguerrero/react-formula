import { useState } from 'react'

import words from "./data/words.jsx";
import WordItem from "./components/WordItem.jsx";

export const WordFilter = () => {
    const [filter, setFilter] = useState('');
    const [inputText, setInputText] = useState('');

    const filteredWords = words.filter((word) => word.includes(filter))
    const worditems = filteredWords.map((word, idx) => <WordItem word={word} key={idx} />);
    return (
        <div className="flex flex-col items-center">
            <form
                className='flex m-5'
                onSubmit={(e) => {
                    e.preventDefault()
                    setFilter(inputText)
                }}
            >
                <input 
                    type="text"
                    className='bg-gray-300 rounded-l-md p-3 focus:border focus:outline-emerald-400' 
                    placeholder='enter a string' 
                    onChange={(e) => setInputText
                    (e.target.value)} 
                />
                <button className='bg-emerald-400 text-white p-3 rounded-r-md'>Search</button>
            </form>
            <div className="flex flex-wrap justify-center w-full max-w-lg">
                {worditems}
            </div>
        </div>
    );
};

