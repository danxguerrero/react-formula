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

    return <div className="flex flex-col items-center  h-screen bg-neutral-50">
                <div className="w-full flex justify-end p-3">
                    <button
                        onClick={fetchForecast}
                        className="bg-orange-200 text-orange-500 text-xl py-3 px-8 rounded-lg hover:bg-orange-300"
                    >
                        <i class="fa-solid fa-rotate-right"></i>
                    </button>
                </div>
                <div className="flex w-full justify-between items-center h-full max-w-3xl">
                    {weatherCards}
                </div>
            </div>
}