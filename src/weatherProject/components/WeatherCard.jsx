export const WeatherCard = ({ forecast }) => {

    const WEATHER_ICON = {
        Sunny: <i className="text-orange-400 fa-solid fa-sun"></i>,
        "Partly Cloudy": <i className="fa-duotone fa-cloud text-slate-400"></i>,
        Cloudy: <i className="fa-solid fa-clouds text-slate-500"></i>,
        Rain: <i className="fa-duotone fa-cloud-rain text-slate-400"></i>,
        Snow: <i className="text-blue-300 fa-solid fa-snowflake"></i>,
    };

    return (
        <div className="flex flex-col items-center justify-between bg-white border border-gray-200 h-36 w-[120px] p-2 rounded-lg">
            <div className="text-lg">{forecast.day}</div>
            <div className="text-3xl">{WEATHER_ICON[forecast.description]}</div>
            <div className="flex justify-between w-full">
                <div className="text-sm">{forecast.high_temp}°F</div>
                <div className="text-sm text-slate-500">{forecast.low_temp}°F</div>
            </div>
        </div>
    )
}