import { useState, useEffect } from 'react'

import { WeatherCard } from '../weatherProject/components/WeatherCard'
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
        <div className="flex justify-center">
            {forecast && <WeatherCard forecast={forecast} />}
            {error && <ErrorMessage error={error.error_message} />}
        </div>
    )
}