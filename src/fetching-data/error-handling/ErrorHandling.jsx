import { useState, useEffect } from 'react'

import { WeatherCard } from '../weather-project/components/WeatherCard.jsx'
import { ErrorMessage } from './components/ErrorMessage.jsx'

export const ErrorHandling = () => {
    const [forecast, setForecast] = useState(null)
    const [error, setError] = useState(null)

    const fetchWeather = async () => {

        try {
            const response = await fetch('https://api.react-formula.com/learning-api/demos/error-handling/weather')

            if (response.ok) {
            const data = await response.json()

            setError(null)
            setForecast(data)

            } else {
                setForecast(null)
                const errorData = await response.json()
                console.log(errorData)
                setError(errorData)
            }

        } catch (err) {
            console.error("There was an error fetching weather", err)
            setError(err)
        }
    }

    useEffect(() => {
        fetchWeather()
    }, [])

    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="p-3">
                <button
                    onClick={fetchWeather}
                    className="bg-fuchsia-200 text-fuchsia-500 text-lg py-2 px-4 rounded-lg hover:bg-fuchsia-300"
                >
                    <i class="fa-solid fa-rotate-right"></i>
                </button>
            </div>
            <div className="h-full flex items-center justify-center">
            {forecast && <WeatherCard forecast={forecast} />}
            {error && <ErrorMessage error={error.error_message} />}
            </div>
        </div>
    )
}