import { useState, useEffect } from "react";

function WeatherApp() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        async function fetchWeather() {
            const res = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Kuala%20Lumpur?key=GTV65SW4FHKBMYSZW8MV4DYAA");
            const data = await res.json();
            setWeather(data.current_weather);
        }
        fetchWeather();
    }, []);

    if (!weather) return <p>Loading weather...</p>;

    return (
        <div>
            <h2>Current Weather</h2>
            <p>Temperature: {weather.temperature}</p>
            <p>WindSpeed: {weather.temperature}</p>
        </div>
    );
}
export default WeatherApp;