import { useState, useEffect } from 'react'

import { StateCard } from './components/StateCard.jsx'
import { ErrorMessage } from './components/ErrorMessage.jsx'

export const StatesProject = () => {
    const [searchInput, setSearchInput] = useState("")
    const [state, setState] = useState(null)
    const [error, setError] = useState(null)

    const fetchState = async (searchInput) => {
        try {
            const response = await fetch(`https://api.react-formula.com/learning-api/demos/states-project/states/${searchInput}`)

            if (response.ok) {
                const data = await response.json()
    
                setError(null)
                setState(data)
            } else {
                setState(null)
                const errorData = await response.json()
                setError(errorData)
                console.log(error)
            }

        } catch (err) {
            console.err("There was an error fetching state: ", err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchState(searchInput)
    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center w-full max-w-xl">
                <form
                    onSubmit={handleSubmit}
                    className="m-8"
                >
                    <input
                        type="text"
                        className="border border-slate-300 rounded-lg p-1 mr-4"
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        placeholder="Enter a state"
                    />
                    <button className="bg-teal-200 text-teal-600 py-1 px-4 rounded-md" type="submit">search</button>
                </form>
                <div className="h-full">
                    {state && <StateCard state={state} />}
                    {error && <ErrorMessage error={error.error} />}
                </div>
            </div>
        </div>
    )
}