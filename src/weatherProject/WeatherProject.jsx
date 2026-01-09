import { useState, useEffect } from 'react'

import { WeatherCard } from './components/WeatherCard.jsx'

export const WeatherProject = () => {

    const [forecasts, setForecasts] = useState([])

    const fetchForecast = async () => {
        try {
            const response = await fetch("https://api.react-formula.com/learning-api/demos/weather-forecast/weather")

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()

            setForecasts(data)
        } catch (err) {
            console.error("There was an error fetching forecasts: ", err)
        }

    }


    useEffect(() => {
        fetchForecast()
    }, [])

    const weatherCards = forecasts.map((forecast, idx) => <WeatherCard key={idx} forecast={forecast} />)

    return <div className="flex items-center justify-center h-screen bg-neutral-50">
                <div className="flex w-full justify-between max-w-3xl">
                    {weatherCards}
                </div>
            </div>
}